import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task01';

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]],
      address: [''],
      city: ['', Validators.required,Validators.minLength(4)],
      state: [''],
      zipCode: ['', Validators.pattern('^[0-9]+$')],
      comments: ['']
    })
  }

  isFormValid() {
    Object.keys(this.myForm.controls).forEach((key) => {
      const controlErrors = this.myForm.controls[key].errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(
            "Key control: " + key + ", keyError: " + keyError + ", err value: ",
            controlErrors[keyError]
          );
        });
      }
    });
    
    if(this.myForm.controls['firstName'].valid
      && this.myForm.controls['lastName'].valid
      && this.myForm.controls['phone'].valid
      && this.myForm.controls['city'].valid
    ){
      console.log("Form is valid");
      return true;
    } else {
      console.log("Form is Invalid");
      return false;
    }
  }
}
