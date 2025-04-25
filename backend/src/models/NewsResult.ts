import { TNewsArticle, TNewsResult } from "../@types/TNewsResult";

export default class NewsResult {
    readonly status: "ok" | "error";
    readonly totalResults: number;
    readonly articles: TNewsArticle[];

    constructor(props: TNewsResult) {

        if (!props.articles) throw new Error("Articles array is required");

        this.status = props.status ?? "ok";
        this.totalResults = props.totalResults ?? props.articles.length;
        this.articles = props.articles.map(article => ({
            ...article,
            publishedAt: new Date(article.publishedAt),
        }));
    }
}