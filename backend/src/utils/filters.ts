import { Filter } from "bad-words";
import leoProfanity from "leo-profanity";

const enhancedFilter = new Filter({
    regex: /\*|\.|$/gi,
    replaceRegex: /[A-Za-z0-9가-힣_]/g,
});

leoProfanity.loadDictionary('en');

export function hasProfanity(text: string): boolean {
    return enhancedFilter.isProfane(text) || leoProfanity.check(text);
}