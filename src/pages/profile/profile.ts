import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';

import { PaymentsPage } from '../payments/payments';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

import { OrdersPage } from '../orders/orders';
import { DownloadsPage } from '../downloads/downloads';
import { HelpPage } from '../help/help';
import { EditProfilePage } from '../editprofile/editprofile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  authkey: any;

  fname: string;
  lname: string;
  add1: string;
  add2: string;
  zip: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;

  last7: string;
  last30: string;
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

  this.fname = "";
  this.lname = "";
  this.add1 = "";
  this.add2 = "";
  this.zip = "";
  this.email = "";
  this.phone = "";
  this.city = "";
  this.state = "";
  this.country = "";
  this.last7 = "";
  this.last30 = "";

  }




  goOrders() {
    this.navCtrl.push(OrdersPage);
  }

  goDownloads() {
    this.navCtrl.push(DownloadsPage);
  }

  goHelp() {
    this.navCtrl.push(HelpPage);
  }

  goEdit() {
    this.navCtrl.push(EditProfilePage);
  }

}
