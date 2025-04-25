import TGeminiPrompt from "../@types/TGeminiPrompt";



export default class GeminiPrompt {
    language: string;
    topic: string;
    style: string;
    tone?: string;
    length: number;
    audience?: string;
    format?: string;
    depth?: string;
    seoKeywords?: string;

    constructor(props: TGeminiPrompt) {
        this.language = props.language;
        this.topic = props.topic;
        this.style = props.style;
        this.tone = props.tone ?? "";
        this.length = props.length;
        this.audience = props.audience ?? "";
        this.format = props.format ?? "";
        this.depth = props.depth ?? "";
        this.seoKeywords = props.seoKeywords ?? "";
    }

    static async create(data: TGeminiPrompt) {
        try {
            const geminiPrompt = `Generate an article or text using the following parameters.
            If any parameter is empty or contains only whitespace, ignore it completely.

            - Language: ${data.language}
            - Topic: ${data.topic}
            - Style: ${data.style}
            - Tone: ${data.tone}
            - Length: ${data.length}
            - Audience: ${data.audience}
            - Format: ${data.format}
            - Depth: ${data.depth}
            - SEO Keywords: ${data.seoKeywords}`;

                    return geminiPrompt;
        } catch (error) {
            console.error(error);
            throw new Error(`Error while creating Gemini Prompt: ${error}`);
        }
    }
}