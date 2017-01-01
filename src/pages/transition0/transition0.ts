import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Choice0Page } from '../choice0/choice0';

/*
  Generated class for the Transition0 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transition0',
  templateUrl: 'transition0.html'
})
export class Transition0Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Transition0Page');

    //Start the timer to change pages.
    this.startTimer();
  }

  startTimer(){
    setTimeout(() => {
      this.navCtrl.push(Choice0Page);
    }, 4000);
  }

}
