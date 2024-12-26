import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit{
  ChkPrime:boolean = false;

  constructor(private numberService: NumberService){
  }

  ngOnInit(){
    this.ChkPrime = this.numberService.chkPrime(21);
  }

}
