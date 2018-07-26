import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';

import { PaymentsPage } from '../payments/payments';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html'
})
export class DownloadsPage {
  downloads: string[];
  playlist: string[];

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, private youtube: YoutubeVideoPlayer) {

  this.getPl();
  this.getDl();
  this.playlist = [];
  }

  getPl() {
  let loader = this.loadingCtrl.create({
    content: "Loading address details.",
    duration: 3000
  });
    loader.present();
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyAoU3_0XZV9TdTC4mW9t68vae2zZlep96Q&playlistId=PLA1XUM0-PHp_wXiDyA7XpfXwp0eyiqIgp&part=snippet,contentDetails&order=date&maxResults=20`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.playlist = data.items;
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }

  getDl() {
  let loader = this.loadingCtrl.create({
    content: "Loading address details.",
    duration: 3000
  });
    loader.present();
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAoU3_0XZV9TdTC4mW9t68vae2zZlep96Q&channelId=UCWKO3WX4vD96_BqqaPUjN3g&part=snippet,id&order=date&maxResults=20`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.downloads = data.items;
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }


  play(id) {
    this.youtube.openVideo(id);
  }
}
