import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public str:string="Marvellous Infosystems";

  fun(str:string){
    if(str=="UPPER"){
      this.str = this.str.toUpperCase();
    }else if(str=="LOWER"){
      this.str = this.str.toLowerCase();
    }
  }

}
