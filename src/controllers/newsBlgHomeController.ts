import { Request, Response } from "express";

export function newsBlgHome (req: Request, res: Response) {
    return res.status(200).json({
        mensagem: 'NewsBLG API running'
    })
}

