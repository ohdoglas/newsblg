import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();

const gptKey = process.env.OPENAI_API_KEY;

interface OpenAIResponse {
    [x: string]: any;
    data: {
        choices: Array<{
            text: string;
        }>;
    };
}

const generateContent = async (topic: string): Promise<string> => {
    try {
        const response = await axios.post<OpenAIResponse>(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: `Write an article about ${topic}` }
                ],
                max_tokens: 500
            },
            {
                headers: {
                    'Authorization': `Bearer ${gptKey}`,
                    'Content-Type': 'application/json'
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error generating content:', error);
        throw error;
    }
}

export default generateContent;