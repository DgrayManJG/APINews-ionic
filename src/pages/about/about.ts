import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  prenom: string;
  nom: string;
  age: number;

  constructor(public navCtrl: NavController) {
  }

  private showDetails() {
    this.navCtrl.push(DetailsPage, { 
      prenom: this.prenom, 
      nom: this.nom, 
      age: this.age 
    });
  }
  
}
