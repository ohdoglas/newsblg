import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";



dotenv.config();

const geminiKey = process.env.API_KEY;


const genAI = new GoogleGenerativeAI(String(geminiKey));
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash'});

export async function geminiService(topic: string, style:string, length: number) {
    const prompt = `Write an article about ${topic}, in the style of ${style}. The article should be approximately ${length} words long.`

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;

}
