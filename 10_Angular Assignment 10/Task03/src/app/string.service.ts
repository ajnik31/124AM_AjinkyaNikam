import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  isUpperCase(char: string): boolean {
    return char === char.toUpperCase();
  }

  public countCapital(value: string): number {
    var countOfCapital = 0;
    for (var i = 0; i < value.length; i++) {
      if (/^[A-Z]$/.test(value.charAt(i))) {
        countOfCapital++;
      }
    }
    return countOfCapital;
  }
}
