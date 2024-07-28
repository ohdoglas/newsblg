import { Request, Response } from "express";
import generateContent from "../services/generateContent";


export function newsBlgHome (req: Request, res: Response) {
    return res.status(200).json({
        mensagem: 'NewsBLG API running'
    })
}

export async function createArticle (req: Request, res: Response) {
    const { topic } = req.body;
    try {
        const content = await generateContent(topic);
        res.status(200).json({ article: content});
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate article'});
    }
};