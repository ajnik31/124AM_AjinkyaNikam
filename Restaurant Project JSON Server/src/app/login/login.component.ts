import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false

})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userFound:boolean = true;
  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  logIn() {
    console.log(this.loginForm.value);
    alert("Marvellous" + ' logged in successfully');
    this._router.navigate(['/restaurent']);
    this.loginForm.reset();
  }

  validateUser() {
    var formData = this.loginForm.value;
    this.userFound = false;
    if (!formData.email || !formData.password) {
      //show error
      this.userFound = false;
    }
    var email = formData.email;
    var password = formData.password;
    var userList: any[]=[];
    this.apiService.getUserList().subscribe(res => {
      userList= res;
      for(var i=0;i<userList.length;i++){
        if (userList[i].email == email && userList[i].password == password) {
          this.userFound = true;
          break;
        }
      }
  
      if (this.userFound) {
        this._router.navigate(['/restaurent']);
        this.loginForm.reset();
      } else {
        this.loginForm.reset();
      }
    }, err=>{
      console.log(err);
    })
    

  }
}
