import { Request, Response } from "express";
import generateContent from "../services/generateContent";

export async function createArticle (req: Request, res: Response): Promise<void> {
    const { topic } = req.body;
    try {
        const content = await generateContent(topic);
        res.status(200).json({ article: content});
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate article'});
    }
};