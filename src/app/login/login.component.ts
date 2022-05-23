import { Component, OnInit } from '@angular/core';
import { ComponentservicesService } from '../componentservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private componentService: ComponentservicesService,
              private router: Router) { }
  email:any;
  password: any;
  emailError: any;
  passwordError: any;
  ngOnInit(): void {
  }
  login(){
    if(!this.email){
      this.emailError = "Please enter a valid email address";
    }
    else{
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!regex.test(this.email)){
        this.emailError = "Please enter a valid email address";
      }
      else{
        this.emailError = "";
      }
    }
    if(!this.password){
      this.passwordError = "Please enter your password";
    }
    else{
      this.passwordError = '';
    }
    if(this.emailError || this.passwordError){
      return false;
    }
    let value = { email: this.email, password: this.password};
    console.log(value)
    this.componentService.login(value).subscribe(res =>{
      console.log(res);
      var seconds = new Date().getTime() / 1000;
      localStorage.setItem('access_token', res['access_token']);
      localStorage.setItem('expires_in', seconds+res['expires_in']);
      this.router.navigate(['dashboard'])
    },
      error => {
        if(error.statusText == 'Unauthorized'){
          alert('Email and password do not match')
        }
      },)
  }

}
