import { Request, Response } from "express";
import { geminiService } from "../services/geminiService"


export async function geminiController(req: Request, res: Response) {
    try {
      const { topic, style, length } = req.body;
      const article = await geminiService(topic, style, length);
      res.json({ article });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate article' });
    }
  }


