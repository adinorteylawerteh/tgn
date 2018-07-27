import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})
export class YoutubePage {
  videourl: string;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.videourl = "https://www.youtube.com/embed/"+navParams.get('id');
  }

}
