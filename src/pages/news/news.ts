import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewsApiGlobalArticle } from '../../models/newsapi-globalarticle.model';
import { NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  news: NewsApiGlobalArticle = new NewsApiGlobalArticle();

  constructor(public navCtrl: NavController, private NavParams: NavParams) {
    this.news = NavParams.get('news'); 
  }
  
}
