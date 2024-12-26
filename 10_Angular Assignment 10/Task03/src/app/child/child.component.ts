import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  countOfCapital: number = 0;
  ChkPrime:boolean = false;
  constructor(private stringService: StringService,
    private numberService: NumberService
  ) {  }

  ngOnInit(): void {
    this.countOfCapital = this.stringService.countCapital("Marvellous InfoSystems Rockkss");
    this.ChkPrime = this.numberService.chkPrime(7);
  }
}
