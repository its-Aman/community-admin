import { GlobalProvider } from './../providers/global/global';
import { Component } from '@angular/core';
import { Platform, Events, App } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';

  constructor(
    public platform: Platform,
    public events: Events,
    private global: GlobalProvider,
    public app: App,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
}

