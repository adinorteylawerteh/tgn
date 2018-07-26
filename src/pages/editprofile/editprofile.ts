import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { LoadingController } from 'ionic-angular';

import { PaymentsPage } from '../payments/payments';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }


}
