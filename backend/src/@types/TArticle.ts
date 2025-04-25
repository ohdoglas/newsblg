import { Prisma } from "@prisma/client";

type TArticle = {
    id: string;
    title?: string;
    content: string;
    params: Prisma.InputJsonValue;
    isPublic: boolean;
    createdAt: Date;
    deletedAt?: Date;
}

export default TArticle;