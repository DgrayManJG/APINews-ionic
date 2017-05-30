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

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();

    setTimeout(() => {
      this.newsApiService.getSources()
        .then(sourcesFetched => { 
          this.sources = sourcesFetched
        });
        loader.dismiss();
      }, 1000);
    
  }

  private articleBySource(id, sortBy){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    
    loader.present();

    this.newsApiService.source = id;
    this.newsApiService.sortBy = sortBy;
    
    setTimeout(() => {
        this.newsApiService.getArticles()
          .then(newsFetched => { 
            this.news = newsFetched,
            this.navCtrl.push(NewsPage, { 
              news: this.news,
            })
          });
          
        loader.dismiss();
      }, 1000);


  }

}
