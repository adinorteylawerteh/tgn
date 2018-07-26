import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { DealsPage } from '../deals/deals';
import { CatPage } from '../category/category';
import { ProductPage } from '../product/product';
import { DownloadsPage } from '../downloads/downloads';
import { MenuController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("contentRef") contentHandle: Content;

  public items = [];
  private tabBarHeight;
  private topOrBottom:string;
  private contentBox;

  homeplist: string[];
  playlist: string[];
  homevideos: string[];
  homeaudio: string[];
  homearticle: string[];

  downloads: string[];
  slides: any[];
  audioslides: any[];
  cartnum: any;
  quote: any;
  audio: string[];
  categories: string[];
  tabs: string;
  noaudio: boolean = true;

  private currentColor: string;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, private youtube: YoutubeVideoPlayer) {


    for (let i = 1; i <= 20; i++) {
      this.items.push({ "number": i });
    }

    this.currentColor = "black";

    this.cartnum = 0;
    this.tabs = "home";
    this.quote = "Loading bible verse...";

    this.getHomeVideos();
    this.getHomeAudios();
    this.getHomeArticles();

    this.getQuote();
    this.getSlides();
    this.getAudioSlides();
    this.getCat();
    this.getPl();

  }


  scrollingFun(e) {
  //console.log(this.contentHandle.getContentDimensions().contentHeight);
  //console.log(e.scrollTop);
  if(e.scrollTop == 0) {
    this.currentColor = "black";
  }
    if(e.scrollTop > 19) {
      this.currentColor = "black";
      console.log(e.scrollTop);
    } else {
      this.currentColor = "black";
      console.log(e.scrollTop);
    }
  }


  segmentChanged(e) {
    if(e._value == "home") {

    } else if(e._value == "video") {
      this.getDl();
    } else if(e._value == "audio") {
      this.getAudio();
    } else if(e._value == "articles") {
      this.getHomeProd();
    }
  }

  getHomeVideos() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAoU3_0XZV9TdTC4mW9t68vae2zZlep96Q&channelId=UCWKO3WX4vD96_BqqaPUjN3g&part=snippet,id&order=date&maxResults=4`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.homevideos = data.items;
      },
      error => {
        console.log(error.data);
      });
  }



  getHomeAudios() {
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/media?media_type=audio&per_page=4`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.homeaudio = data;
      },
      error => {
        console.log(error.data);
      });
  }


  getHomeArticles() {
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/posts?per_page=4`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.homearticle = data;
      },
      error => {
        console.log(error.data);
      });
  }



  getQuote() {
    return this.http.get(`http://goodnewsoutreachministries.com/bible.php`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.quote = data[0].text+" - "+data[0].bookname+" "+data[0].chapter+":"+data[0].verse;
      },
      error => {
        console.log(error.data);
      });
  }

  getSlides() {
    let loader = this.loadingCtrl.create({
      content: "Preparing your collection...",
    });
    loader.present();
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyAoU3_0XZV9TdTC4mW9t68vae2zZlep96Q&playlistId=PLA1XUM0-PHp_wXiDyA7XpfXwp0eyiqIgp&part=snippet,contentDetails&order=date&maxResults=4`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        //this.homeplist = data;
        this.slides = data.items;
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }


  getAudioSlides() {
    let loader = this.loadingCtrl.create({
      content: "Preparing your collection...",
    });
    loader.present();
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/media?media_type=audio&per_page=2`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        //this.homeplist = data;
        this.audioslides = data;
        this.noaudio = false;
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }

  getHomeProd() {
  let loader = this.loadingCtrl.create({
    content: "Getting articles & posts...",
  });
    loader.present();
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/posts`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.homeplist = data;
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }


  getAudio() {
  let loader = this.loadingCtrl.create({
    content: "Getting audio lessons......",
  });
    loader.present();
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/media?media_type=audio`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.audio = data;
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }

  getCat() {
    return this.http.get(`https://golden.stackfid.com/index.php/home/api_all_categories`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.log(error.data);
      });
  }

  openCat(id,name) {
    this.navCtrl.setRoot(CatPage, {
      catid: id,
      catname: name
    });
  }

  thisProduct(id) {
    this.navCtrl.push(ProductPage, {
      id:id,
    });
  }

  getPl() {
  let loader = this.loadingCtrl.create({
    content: "Getting video lessons...",
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
    content: "Loading video lessons...",
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

  openAbout() {
    this.navCtrl.push(AboutPage);
  }

  openTV() {
    this.navCtrl.push(DownloadsPage);
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  play(id) {
    this.youtube.openVideo(id);
  }

  view(id,type,title) {
    this.navCtrl.push(DealsPage, {
      id: id,
      type: type,
      title: title,
    });
  }

}
