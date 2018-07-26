import { Pipe, PipeTransform, Injectable } from '@angular/core';
/*
  Generated class for the Cats pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'Cats'
})
@Injectable()
export class CatsPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    let output = '';
    // value = value + ''; // make sure it's a string
    // return value.toLowerCase();
    console.log(value);
    console.log(args);
    value.forEach(function(number){
      output = output + ' - '+ args[number]
    })
    return output;
  }
}
