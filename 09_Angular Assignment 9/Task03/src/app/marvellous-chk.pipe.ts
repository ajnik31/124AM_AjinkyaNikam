import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, operation: string): string {
    var returnValue = "";
    if (operation == "Prime") {
      returnValue = "It is a Prime Number";
      for (var i = 2; i <= value / 2; i++) {
        if (value % i == 0) {
          returnValue = "It is NOT a Prime Number";
          break;
        }
      }
      return returnValue;
    } else if (operation == "Perfect") {
      var divsorsList: number[] = [];
      for (var i = 1; i <= value / 2; i++) {
        if (value % i == 0) {
          divsorsList.push(i);
        }
      }
      var sum = 0;
      for (i = 0; i < divsorsList.length; i++) {
        sum = sum + divsorsList[i];
      }

      if (sum != value) {
        returnValue = "It is NOT a Perfect Number";
      } else {
        returnValue = "It is a Perfect Number";
      }

      return returnValue;
    } else if (operation == "Odd") {
      if (value % 2 != 0) {
        returnValue = "It is a Odd Number";
      } else {
        returnValue = "It is NOT a Odd Number";
      }
    } else if (operation == "Even") {
      if (value % 2 == 0) {
        returnValue = "It is a Even Number";
      } else {
        returnValue = "It is NOT a Even Number";
      }
    }
    return returnValue;
  }

}
