import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyRevPipe } from './my-rev.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyRevPipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task01';

  MyData:string="";


}
