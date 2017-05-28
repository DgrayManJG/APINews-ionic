import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  news: NewsApiGlobal = new NewsApiGlobal();

  constructor(public navCtrl: NavController, private newsApiService: NewsApiService) {
    this.newsApiService.getArticles()
    .then(newsFetched => { 
      this.news = newsFetched,
      console.log(this.news);
    });
  }
  
}
