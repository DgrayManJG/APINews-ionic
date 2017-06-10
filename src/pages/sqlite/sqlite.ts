import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'page-sqlite',
    templateUrl: 'sqlite.html'
})
export class SqlitePage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    }



}
