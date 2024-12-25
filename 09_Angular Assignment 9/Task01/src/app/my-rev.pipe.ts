import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    var newValue:string="";
    for(var i=value.length;i>=0;i--){
      newValue = newValue + value.charAt(i);
    }
    return newValue;
  }

}
