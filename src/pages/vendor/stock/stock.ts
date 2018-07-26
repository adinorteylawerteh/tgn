import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html'
})
export class StockPage {
  constructor(public navCtrl: NavController, public http: Http, private navParams: NavParams, public loadingCtrl: LoadingController) {

  }


}
