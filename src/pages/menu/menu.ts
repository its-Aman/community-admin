import { GlobalProvider } from './../../providers/global/global';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events, Menu, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {

  rootMenuPage: string = 'EventPage';
  @ViewChild(Menu) menuCtrl: Menu;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private global: GlobalProvider,
    private platform: Platform,
  ) {
    this.platform.ready().then(() => {
      this.global.log(`platform is ready`);
    });
  }

  ionViewCanEnter() {
    this.global.log(`in ionViewCanEnter menuPage`);
    if (JSON.parse(localStorage.getItem('user'))) {
      this.global.log(`in ionViewCanEnter menuPage true`);
      return true;
    } else {
      this.global.log(`in ionViewCanEnter menuPage false`);
      setTimeout(() => {
        this.navCtrl.setRoot('LoginPage');
      }, 0);
      return false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  eventList() {
    this.global.log('eventList');
    // this.navCtrl.push('CommunityAppPage', { data: null })
  }

  logout() {
    this.global.log('logout');
    this.navCtrl.setRoot('LoginPage', { data: null });
  }

}
