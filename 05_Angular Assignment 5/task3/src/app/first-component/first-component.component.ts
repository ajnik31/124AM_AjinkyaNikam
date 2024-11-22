import { Component } from '@angular/core';
import { SecondComponentComponent } from "../second-component/second-component.component";

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [SecondComponentComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

}
