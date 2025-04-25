export type TNewsSource = {
    id: string | null;
    name: string;
}

export type TNewsArticle = {
    source: TNewsSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string | Date;
    content: string | null;
}

export type TNewsResult = {
    status: "ok" | "error";
    totalResults: number;
    articles: TNewsArticle[];
}

