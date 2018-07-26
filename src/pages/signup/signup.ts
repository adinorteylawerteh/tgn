import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  fname: any;
  lname: any;
  email: any;
  phone: any;
  password: any;
  cpassword: any;
  add1: any;
  add2: any;
  city: any;
  state: any;
  country: any;
  zip: any;
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.fname = "";
    this.lname = "";
    this.email = "";
    this.phone = "";
    this.password = "";
    this.cpassword = "";
    this.add1 = "";
    this.add2 = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
  }


  goLogin() {
    this.navCtrl.push(LoginPage);
  }
}
