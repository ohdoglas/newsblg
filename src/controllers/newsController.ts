import { Request, Response } from "express";
import fetchRecentNews from "../services/newsService";


export async function getRecentNews(req: Request, res: Response): Promise<void> {
    const { topic } = req.params;

    try {
        const articles = await fetchRecentNews(topic);
        res.status(200).json({ articles });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recent news'})
    }
}
