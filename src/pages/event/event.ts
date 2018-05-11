import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  data: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private global: GlobalProvider
  ) {
    this.fillData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  ionViewCanEnter() {
    this.global.log(`in ionViewCanEnter eventPage`);
    if (localStorage.getItem('user')) {
      this.global.log(`in ionViewCanEnter eventPage true`);
      return true;
    } else {
      this.global.log(`in ionViewCanEnter eventPage false`);
      this.navCtrl.setRoot('LoginPage');
      return false;
    }
  }

  fillData() {
    this.data = [
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      }, {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },
      {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      }, {
        no: 1,
        event_name: 'Lorem Ipsum',
        type: 'Type 1',
        date: new Date(),
        entry_for: 'All',
        action: [
          'confirm entries',
          'payment',
          'volunteer',
          'confirm performance'
        ]
      },

    ]
  }
}
