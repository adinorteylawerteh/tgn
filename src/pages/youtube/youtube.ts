import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})
export class YoutubePage {
  videourl: string;
  constructor(public navCtrl: NavController, private navParams: NavParams,public platform: Platform, private backgroundMode: BackgroundMode) {
    this.videourl = "https://www.youtube.com/embed/"+navParams.get('id');
    this.playAudio();

  }

  public playAudio(){
    this.backgroundMode.enable();
    this.backgroundMode.on("activate").subscribe(()=>{
      console.log(this.backgroundMode.isScreenOff());
    });
  }

}
