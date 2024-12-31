import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { every } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  calculatorForm: FormGroup;

  title = 'SimpleCalculator';
  additionStr: string = "";
  multipleStr: string = "";
  subtractionStr: string = "";
  divisionStr: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.calculatorForm = formBuilder.group({
      AdditionNo1: [''],
      AdditionNo2: [''],
      SubtractionNo1: [''],
      SubtractionNo2: [''],
      MultiplicationNo1: [''],
      MultiplicationNo2: [''],
      DivisionNo1: [''],
      DivisionNo2: [''],
    });
  }

  calculate(event:string){
    console.log(event);
    if(event=="Addition"){
      var Number1 = Number.parseInt(this.calculatorForm.get('AdditionNo1')?.value);
      var Number2 = Number.parseInt(this.calculatorForm.get('AdditionNo2')?.value);
      if(Number1 && Number2){
        this.additionStr = "Addition of " + Number1 + " + " +Number2 + " = "+(Number1+Number2);
      }
    }else  if(event=="Subtraction"){
      var Number1 = Number.parseInt(this.calculatorForm.get('SubtractionNo1')?.value);
      var Number2 = Number.parseInt(this.calculatorForm.get('SubtractionNo2')?.value);
      if(Number1 && Number2){  
        this.subtractionStr = "Subtraction of " + Number1 + " - " +Number2 + " = "+(Number1-Number2);
      }
    }else if(event=="Multiplication"){
      var Number1 = Number.parseInt(this.calculatorForm.get('MultiplicationNo1')?.value);
      var Number2 = Number.parseInt(this.calculatorForm.get('MultiplicationNo2')?.value);
      if(Number1 && Number2){
        this.multipleStr = "Multiplication of " + Number1 + " * " +Number2 + " = "+(Number1*Number2);
      }
    }else if(event=="Division"){
      var Number1 = Number.parseInt(this.calculatorForm.get('DivisionNo1')?.value);
      var Number2 = Number.parseInt(this.calculatorForm.get('DivisionNo2')?.value);
      if(Number1 && Number2){
        this.divisionStr = "Division of " + Number1 + " / " +Number2 + " = "+(Number1/Number2);
      }
    }
  }
}
