import { OpenAI } from "openai";
import "dotenv/config";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function textModerator(text: string) {
    const response = await openai.moderations.create({
        input: text
    });

    const result = response.results[0];

    if (result.flagged) {
        return false;
    }

    return true;
}