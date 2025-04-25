type TGeminiPrompt = {
    language: string; //lingua a qual será criado o artigo
    topic: string; //tema central
    style: string; //estilo de escrita desejado
    tone?: string; //tom emocional da escrita - neutro, otimista, critico, vendedor
    length: number; //curto (1 paragrafo), médio(500 palavras), longo (1000+)
    audience?: string; //publico alvo
    format?: string; //formato estrutural (lista, narrativa, passo-a-passo, Q&A)
    depth?: string; // nível de profundidade (superficial, intermediário, profundo)
    seoKeywords?: string; //palavras-chaves
}

export default TGeminiPrompt;