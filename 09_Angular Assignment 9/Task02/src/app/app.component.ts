import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAddPipe } from './my-add.pipe';
import { MyMulPipe } from './my-mul.pipe';
MyMulPipe
MyAddPipe
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyAddPipe,MyMulPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task02';
}
