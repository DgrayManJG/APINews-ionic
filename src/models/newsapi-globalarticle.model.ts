import { NewsApiArticle } from './newsapi-article.model';

export class NewsApiGlobalArticle {

    status: string;
    source: string;
    sortBy: string;
    articles: NewsApiArticle[];

}