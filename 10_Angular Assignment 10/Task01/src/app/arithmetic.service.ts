import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public add(value1:number, value2:number):number{
    return value1+value2;
  }

  public sub(value1:number, value2:number):number{
    return value1-value2;
  }
}
