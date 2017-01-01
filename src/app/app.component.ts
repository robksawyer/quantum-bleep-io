import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

// Use Greensock animation libraries
import 'gsap';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      // TODO: Fix?
      // https://github.com/apache/cordova-plugin-screen-orientation
      // window.screen.lockOrientation('landscape');
      // Or?
      // https://ionicframework.com/docs/v2/api/platform/Platform/
      if(platform.isPortrait()){
        //Present an alert or some dialog to let the user know to rotate.
        
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
