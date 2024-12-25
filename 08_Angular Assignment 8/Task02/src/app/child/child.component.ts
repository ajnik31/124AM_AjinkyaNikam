import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
 
  @Input() parentData : string= "";
  @Output() public childEvent = new EventEmitter();
  
  ngOnInit(): void {
    this.childEvent.emit("Hello from Child");
  }
}
