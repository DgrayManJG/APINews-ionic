import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// native component
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
    selector: 'page-native-storage',
    templateUrl: 'native-storage.html'
})
export class NativeStoragePage {

    name: string;
    surname: string;
    years: number;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private nativeStorage: NativeStorage) {
    }

    public storeIdentity(): void {
        this.nativeStorage.setItem('my-identity-card', {
            name: this.name,
            surname: this.surname,
            years: this.years
        })
            .then(
            () => {
                let alert = this.alertCtrl.create({
                    title: 'Card saved !',
                    subTitle: 'Your identity it\'s save on native storage!',
                    buttons: ['OK']
                });
                alert.present();
            },
            error => console.error('Error storing item', error)
            );

    }

    public getMyIndentity(): void {
        this.nativeStorage.getItem('my-identity-card')
            .then(
                data => {
                    this.name = data.name;
                    this.surname = data.surname;
                    this.years = data.years
                },
                error => console.error(error)
            );
    }



}
