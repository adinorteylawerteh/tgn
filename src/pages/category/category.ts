import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';
import { SearchPage } from '../search/search';

import { ProductPage } from '../product/product';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CatPage {
  plist: string[];
  catid: string;
  catname: string;
  selectedItem: any;
  cartnum: any;
  constructor(public navCtrl: NavController, public http: Http, private navParams: NavParams, public loadingCtrl: LoadingController) {
    this.selectedItem = navParams.get('catid');
    this.catname = navParams.get('catname');
    var sel = this.selectedItem;
  }



  thisProduct(id) {
    this.navCtrl.push(ProductPage, {
      id:id,
    });
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

}
