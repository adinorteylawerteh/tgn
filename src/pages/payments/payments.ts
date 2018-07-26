import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html'
})
export class PaymentsPage {
  authkey: any;
  cartlist: any;

  fname: any;
  lname: any;
  add1: any;
  add2: any;
  zip: any;
  email: any;
  phone: any;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, private navParams: NavParams) {
     this.fname = navParams.get('fname');
     this.lname = navParams.get('lname');
     this.add1 = navParams.get('add1');
     this.add2 = navParams.get('add2');
     this.zip = navParams.get('zip');
     this.email = navParams.get('email');
     this.phone = navParams.get('phone');
  }

}
