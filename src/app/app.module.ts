import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Dialogs } from '@ionic-native/dialogs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { NativeAudio } from '@ionic-native/native-audio';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeliveryPage } from '../pages/delivery/delivery';
import { PaymentsPage } from '../pages/payments/payments';
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
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    LoginPage,
    SignupPage,
    CatPage,
    DeliveryPage,
    PaymentsPage,
    ProfilePage,
    OrdersPage,
    DownloadsPage,
    HelpPage,
    EditProfilePage,
    SearchPage,
    DealsPage,
    CouponsPage,
    DashPage,
    PackagePage,
    VPaymentsPage,
    SalePage,
    StockPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    LoginPage,
    SignupPage,
    CatPage,
    DeliveryPage,
    PaymentsPage,
    ProfilePage,
    OrdersPage,
    DownloadsPage,
    HelpPage,
    EditProfilePage,
    SearchPage,
    DealsPage,
    CouponsPage,
    DashPage,
    PackagePage,
    VPaymentsPage,
    SalePage,
    StockPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    InAppBrowser,
    YoutubeVideoPlayer,
    NativeAudio,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
