import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.email = "";
    this.password = "";
  }

  goSignup() {
    this.navCtrl.push(SignupPage);
  }


  doLogin() {
  let loader = this.loadingCtrl.create({
    content: "Logging in...",
  });
    loader.present();

    var email = this.email;
    var password = this.password;

    if(email == "" || password == "") {
      let alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'All inputs are required to login.',
        buttons: ['OK']
      });
      alert.present();
      loader.dismiss();
      return false;
    }

    var authkey = btoa(email+":"+password);

    return this.http.get('https://golden.stackfid.com/index.php/home/api_login?dets='+authkey)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        if(data.success == true) {

      
        } else {
          let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'You entered a wrong email/password.',
            buttons: ['OK']
          });
          alert.present();
        }
        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }

}
