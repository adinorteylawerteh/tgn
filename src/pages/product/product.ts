import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { SearchPage } from '../search/search';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  selectedItem: any;
  product: string;
  title: string;
  pid: string;
  pimage: string;
  description: any;
  date: any;
  cartnum: any;
  categories : any;
  tcategories : any;
  gcategories : any;

  constructor(public navCtrl: NavController, public http: Http, private navParams: NavParams, public loadingCtrl: LoadingController) {
    this.product = "desc";
    this.selectedItem = navParams.get('id');
    var sel = this.selectedItem;
    this.getHomeProd(sel);
    this.loadCategories();

  }

  getHomeProd(id) {
  let loader = this.loadingCtrl.create({
    content: "Loading product details",
    duration: 3000
  });
    loader.present();
    return this.http.get('https://goodnewsoutreachministries.com/wp-json/wp/v2/posts/'+id)
    .map((res:Response) => res.json())
    .subscribe(
      data => {
        console.log(data);
        var res = data;
        this.title = res.title.rendered;
        this.description = res.content.rendered;
        this.pid = res.id;
        this.categories = res.categories;
        this.date = res.date;

        this.pimage = res.better_featured_image.source_url;


        this.http.get("https://goodnewsoutreachministries.com/wp-json/wp/v2/categories")
          .map(res => res.json())
          .subscribe(data => {

            // create a variable we can use in function
            let categoryArray = {};

            // for every category in our endpoint request, add its name and id
            // to categoryArray
            data.forEach(function(item){
              categoryArray[item.id] = item.name;
            })

            let thecategoryArray = {};
            var thecats = this.categories;
            thecats.forEach(function(item){
              thecategoryArray[item] = categoryArray[item];
            })

            this.tcategories = thecategoryArray;

          });



        loader.dismiss();
      },
      error => {
        console.log(error.data);
        loader.dismiss();
      });
  }


    loadCategories() {
      this.http.get("https://goodnewsoutreachministries.com/wp-json/wp/v2/categories")
        .map(res => res.json())
        .subscribe(data => {

          // create a variable we can use in function
          let categoryArray = {};

          // for every category in our endpoint request, add its name and id
          // to categoryArray
          data.forEach(function(item){
            categoryArray[item.id] = item.name;
          })

          // Assign this to our class variable this.categories
          // for use in template
          return categoryArray;

        });
    }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

}
