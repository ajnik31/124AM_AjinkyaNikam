import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  addition:number = 0;
  subtraction:number = 0;
  
  constructor(private arithmeticService : ArithmeticService){
  }

  ngOnInit(): void {
    this.addition = this.arithmeticService.add(20,10);
    this.subtraction = this.arithmeticService.sub(20,10);
  }

}
