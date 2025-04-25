import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();

const newsKey = process.env.NEWS_API_KEY

interface Article {
    source: {
        id: string | null;
        name: string;
};
author: string | null;
title: string;
description: string;
url: string;
urlToImage: string | null;
publishedAt: string;
content: string | null;
}

interface NewsApiResponse {
        status: string;
        totalResults: number;
        articles: Article[];
    }

const fetchRecentNews = async (topic: string): Promise<Article[]> => {
    try {
        const response = await axios.get<NewsApiResponse>(
            `https://newsapi.org/v2/everything?q=${topic}&apiKey=${newsKey}`
        );
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};

export default fetchRecentNews;