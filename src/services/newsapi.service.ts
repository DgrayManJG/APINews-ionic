// core components
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from "../models/newsapi-global.model";

@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private source: string = 'the-next-web';
    private apiKey: string = 'fdeda09951fa4ae19b46f08a1758536e';

    constructor(private http: Http) {

    }

    public getArticles(): Promise<NewsApiGlobal> {
        const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('une erreur est survenue' + error))

    }

}