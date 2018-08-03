import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { ProductPage } from '../product/product';
import { YoutubePage } from '../youtube/youtube';

@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html'
})
export class DealsPage {
  cartnum: any;
  image: string;
  title: string;
  channeltitle: string;
  type: string;
  id: string;
  file: string;

  constructor(public navCtrl: NavController, public http: Http, private navParams: NavParams, public loadingCtrl: LoadingController, private youtube: YoutubeVideoPlayer, private streamingMedia: StreamingMedia,private fileOpener: FileOpener) {
    this.file = "";
    this.getDeals(navParams.get('id'),navParams.get('type'),navParams.get('title'));
  }

  getDeals(id,type,title) {
  let loader = this.loadingCtrl.create({
    content: "Loading "+type+"...",
  });
  loader.present();

    if(type == "video") {

      return this.http.get("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAoU3_0XZV9TdTC4mW9t68vae2zZlep96Q&part=snippet,contentDetails,statistics&id="+id+"")
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.image = data.items[0].snippet.thumbnails.default.url;
          this.title = data.items[0].snippet.title;
          this.channeltitle = data.items[0].snippet.channelTitle;
          this.type = type;
          this.id = id;
          loader.dismiss();
        },
        error => {
          console.log(error.data);
          loader.dismiss();
        });

    } else if(type == "audio") {

      return this.http.get("https://goodnewsoutreachministries.com/wp-json/wp/v2/media/"+id+"")
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.image = "assets/imgs/audio.jpg";
          this.title = data.title.rendered;
          this.channeltitle = "Goodnews Outreach Ministries";
          this.type = type;
          this.id = id;
          this.file = data.guid.rendered;
          loader.dismiss();
        },
        error => {
          console.log(error.data);
          loader.dismiss();
        });
    } else if(type == "book") {

      return this.http.get("https://goodnewsoutreachministries.com/wp-json/wp/v2/book/"+id+"")
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.image = data.better_featured_image.source_url;
          this.title = data.title.rendered;
          this.channeltitle = "Goodnews Outreach Ministries";
          this.type = type;
          this.id = id;
          this.file = data.guid.rendered;
          loader.dismiss();
        },
        error => {
          console.log(error.data);
          loader.dismiss();
        });
    }
  }

  play(id,type,file) {
    if(type == "video") {
      window.open('https://goodnewsoutreachministries.com/vids.php?watch='+id, '_system');
      /*this.navCtrl.push(YoutubePage, {
        id: id,
      });*/
    } else if(type == "audio") {
      let options: StreamingVideoOptions = {
        successCallback: () => { console.log('Audio played') },
        errorCallback: (e) => { console.log('Error streaming') },
      };

      this.streamingMedia.playAudio(file, options);
    } else if(type == "book") {
      this.fileOpener.open('assets/dummy.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));
    /*  window.open('https://goodnewsoutreachministries.com/wp-json/bookfile/v1/file?id='+id, '_system');*/
    }
  }

}
