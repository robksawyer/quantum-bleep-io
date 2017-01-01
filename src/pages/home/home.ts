import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LabPage } from '../lab/lab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLab(){
    this.navCtrl.push(LabPage);
  }

}
