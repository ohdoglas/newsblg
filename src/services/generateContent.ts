import axios from "axios";

interface OpenAIResponse {
    data: {
        choices: Array<{
            text: string;
        }>;
    };
}

const generateContent = async (topic: string): Promise<string> => {
    try {
        const response: OpenAIResponse = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            { prompt: `Write an article about ${topic}`,
        max_tokens: 500,
    },
    {
        headers: {
            'Authorization': `Bearer $ process.env.OPENAI_API_KEY`,
        },
    }
        );
        return response.data.choices[0].text;
    } catch (error){
        console.error('Error generating content:', error);
        throw error;
    }
}

export default generateContent;