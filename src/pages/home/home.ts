import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';

import { NewsPage } from '../news/news';

import { NewsApiGlobalArticle } from '../../models/newsapi-globalarticle.model';
import { NewsApiGlobalSource } from '../../models/newsapi-globalsource.model';
import { NewsApiService } from '../../services/newsapi.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sources: NewsApiGlobalSource = new NewsApiGlobalSource();
  news: NewsApiGlobalArticle = new NewsApiGlobalArticle();

  constructor(public navCtrl: NavController, private newsApiService: NewsApiService, public loadingCtrl: LoadingController) {
    this.newsApiService.getSources()
    .then(sourcesFetched => { 
      this.sources = sourcesFetched,
      console.log(this.sources);
    });
  }

  private articleBySource(id, sortBy){
    
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();

    this.newsApiService.source = id;
    this.newsApiService.sortBy = sortBy;

    this.newsApiService.getArticles()
    .then(newsFetched => { 
      this.news = newsFetched,
      this.navCtrl.push(NewsPage, { 
        news: this.news,
      })
    });

  }

}
