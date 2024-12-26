import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {


  constructor() { }

  public chkPrime(value: number): boolean {
    var returnValue: boolean = true;
    for (var i = 2; i < value / 2; i++) {
      if (value % i == 0) {
        returnValue = false;
        break;
      }
    }

    return returnValue;
  }
}
