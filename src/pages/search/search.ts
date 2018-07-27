import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { ProductPage } from '../product/product';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  selectedItem: any;
  product: string;
  title: string;
  pid: string;
  price: string;
  pimage: string[];
  description: any;

  homevideos: string[];
  homeaudio: string[];
  homearticle: string[];

  plist: string[];
  term: string;
  cartnum: any;
  constructor(public navCtrl: NavController, public http: Http, private navParams: NavParams, public loadingCtrl: LoadingController) {
    this.product = "desc";
    this.term = "";
    this.selectedItem = navParams.get('id');
    var sel = this.selectedItem;




  }

  getPbySearch() {
    this.getHomeVideos();
    this.getHomeAudios();
    this.getHomeArticles();
  }



  getHomeVideos() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAoU3_0XZV9TdTC4mW9t68vae2zZlep96Q&channelId=UCWKO3WX4vD96_BqqaPUjN3g&part=snippet,id&order=date&maxResults=20&q=`+this.term)
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
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/media?media_type=audio&per_page=20&search=`+this.term)
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
    return this.http.get(`https://goodnewsoutreachministries.com/wp-json/wp/v2/posts?per_page=20&categories=50&search=`+this.term)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.homearticle = data;
      },
      error => {
        console.log(error.data);
      });
  }


  thisProduct(id) {
    this.navCtrl.push(ProductPage, {
      id:id,
    });
  }

}
