import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Transition0Page } from '../transition0/transition0';

/*
  Generated class for the Lab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html'
})
export class LabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabPage');
  }

  transition0(){
    this.navCtrl.push(Transition0Page);
  }

}
