import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// pages
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { DetailsPage } from '../pages/details/details';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';

//services
import { HttpModule } from "@angular/http";
import { NewsApiService } from '../services/newsapi.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    DetailsPage,
    NewsPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DetailsPage,
    NewsPage,
    TabsPage  
  ],
  providers: [
    NewsApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
