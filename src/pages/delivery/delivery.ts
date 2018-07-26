import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';

import { PaymentsPage } from '../payments/payments';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html'
})
export class DeliveryPage {
  authkey: any;

  fname: string;
  lname: string;
  add1: string;
  add2: string;
  zip: string;
  email: string;
  phone: string;
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

  this.fname = "";
  this.lname = "";
  this.add1 = "";
  this.add2 = "";
  this.zip = "";
  this.email = "";
  this.phone = "";

  }




  goPayments() {
    this.navCtrl.push(PaymentsPage, {
    fname: this.fname,
    lname: this.lname,
    add1: this.add1,
    add2: this.add2,
    zip: this.zip,
    email: this.email,
    phone: this.phone,
    });
  }

}
