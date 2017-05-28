import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  prenom: string;
  nom: string;
  age: number;

  constructor(public navCtrl: NavController, private NavParams: NavParams) {
    this.prenom = NavParams.get('prenom'); 
    this.nom = NavParams.get('nom'); 
    this.age = NavParams.get('age');
  }

}
