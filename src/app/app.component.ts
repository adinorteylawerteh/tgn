import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { MenuController } from 'ionic-angular';

import { DeliveryPage } from '../pages/delivery/delivery';
import { PaymentsPage } from '../pages/payments/payments';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from '../pages/product/product';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CatPage } from '../pages/category/category';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { DealsPage } from '../pages/deals/deals';

import { OrdersPage } from '../pages/orders/orders';
import { DownloadsPage } from '../pages/downloads/downloads';
import { HelpPage } from '../pages/help/help';
import { EditProfilePage } from '../pages/editprofile/editprofile';
import { CouponsPage } from '../pages/vendor/coupons/coupons';
import { DashPage } from '../pages/vendor/dash/dash';
import { PackagePage } from '../pages/vendor/package/package';
import { VPaymentsPage } from '../pages/vendor/payments/payments';
import { SalePage } from '../pages/vendor/sale/sale';
import { StockPage } from '../pages/vendor/stock/stock';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;
  vendors: Array<{title: string, component: any, icon: any}>;
  categories: string[];
  homeplist: string[];
  is_logged: boolean;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: Http, public menuCtrl: MenuController) {
    this.initializeApp();
    this.is_logged = false;

    this.menuCtrl.enable(false, 'menu');
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Events', component: HomePage, icon: 'ios-grid-outline' },
      { title: 'Store', component: OrdersPage, icon: 'ios-information-circle-outline' },
      { title: 'Partner Us', component: OrdersPage, icon: 'ios-cart-outline' },
      { title: 'About Us', component: OrdersPage, icon: 'ios-paper-outline' },
    ];


      this.vendors = [
      { title: 'Dashboard', component: DashPage, icon: 'ios-grid-outline' },
      { title: 'Product Stock', component: StockPage, icon: 'ios-albums-outline' },
      { title: 'Sale', component: SalePage, icon: 'ios-basket-outline' },
      { title: 'Payments', component: VPaymentsPage, icon: 'ios-card-outline' },
      { title: 'Seller Package', component: PackagePage, icon: 'ios-infinite-outline' },
      { title: 'Manage Coupons', component: CouponsPage, icon: 'ios-barcode-outline' },
    ];


    this.getMenuCat();
    this.getHomeProd();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  getMenuCat() {
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

  getHomeProd() {
    return this.http.get(`https://golden.stackfid.com/index.php/home/api_home_products`)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        this.homeplist = data;
      },
      error => {
        console.log(error.data);
      });
  }

  openCat(id,name) {
    this.nav.setRoot(CatPage, {
      catid: id,
      catname: name
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goSignup() {
    this.nav.push(SignupPage);
  }

  goLogin() {
    this.nav.push(LoginPage);
  }

  goProfile() {
    this.nav.push(ProfilePage);
  }
}
