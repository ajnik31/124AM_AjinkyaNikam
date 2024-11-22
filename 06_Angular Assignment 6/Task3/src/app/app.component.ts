import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h2 [class]="\'blueColor\'">Marvellous Infosystems</h2><input type="text">',
  styles: '.blueColor{color:blue;}'
})
export class AppComponent {
  title = 'Task3';
}
