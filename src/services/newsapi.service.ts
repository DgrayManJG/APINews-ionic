// core components
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobalArticle } from "../models/newsapi-globalarticle.model";
import { NewsApiGlobalSource } from "../models/newsapi-globalsource.model";

@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    public source: string = '';
    public sortBy: string;
    private apiKey: string = 'fdeda09951fa4ae19b46f08a1758536e';

    constructor(private http: Http) {

    }

    public getArticles(): Promise<NewsApiGlobalArticle> {
        const url = `${this.baseUrl}articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobalArticle)
        .catch(error => console.log('une erreur est survenue' + error))

    }

    public getSources(): Promise<NewsApiGlobalSource> {
        const url = `${this.baseUrl}sources`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobalSource)
        .catch(error => console.log('une erreur est survenue' + error))
    }

}