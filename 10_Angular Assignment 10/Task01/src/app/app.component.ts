import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArithmeticService } from './arithmetic.service';
import { DemoComponent } from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Task01';

  
  
}
