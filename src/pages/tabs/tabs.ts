import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NativeStoragePage } from '../native-storage/native-storage';
import { SqlitePage } from '../sqlite/sqlite';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = NativeStoragePage;
  tab4Root = SqlitePage;

  constructor() {

  }

}
