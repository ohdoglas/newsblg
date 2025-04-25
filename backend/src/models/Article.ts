import TArticle from "../@types/TArticle";
import { v4 as uuidv4 } from "uuid";
import prisma from "../config/prisma";
import { Prisma } from "@prisma/client";


export default class Article {
    id: string;
    title?: string;
    content: string;
    params: Prisma.InputJsonValue;
    isPublic: boolean;
    createdAt: Date;
    deletedAt?: Date;

    constructor (props: TArticle) {
        this.id = props.id || uuidv4();
        this.title = props.title ?? "Untitled";
        this.content = props.content;
        this.params = props.params;
        this.isPublic = props.isPublic ?? false;
        this.createdAt = props.createdAt ?? new Date();
    }

    static async create(data: TArticle): Promise<TArticle> {
        try {
            const article = new Article(data);

            const saved = await prisma.article.create({
                data: {
                    id: article.id,
                    title: article.title,
                    content: article.content,
                    params: article.params,
                    isPublic: article.isPublic,
                    createdAt: article.createdAt,
                }
            });

            return new Article(article);
        } catch (error) {
            console.error(error);
            throw new Error(`Error inserting new article on DB: ${error}`)
        }
    }

    static async findById(id: string) {
        try {
            const find = await prisma.article.findFirst({
                where: { id: id}
            });
            if(!find) {
                return false;
            }
            return find;
        } catch (error) {
            console.error(error);
            throw new Error(`Error while finding Article by ID: ${error}`);
        }
    }

    static async findAllPublic() {
        try {
            const publicArticles = await prisma.article.findMany({
                where: { isPublic: false }
            });
            if (!publicArticles) {
                return false;
            }
            return publicArticles;
        } catch (error) {
            console.error(error);
            throw new Error(`Error while searching for public Articles: ${error}`);        }
    }

    static async findManyByFilters() {
        try {
            
        } catch (error) {
            console.error(error);
            throw new Error(`Error while searching articles by filters ${error}`)
        }
    }

    
}