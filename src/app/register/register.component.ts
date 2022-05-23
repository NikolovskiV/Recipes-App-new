import { Component, OnInit } from '@angular/core';
import { ComponentservicesService } from '../componentservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private componentService: ComponentservicesService,
              private router: Router) { }
  email:any;
  password: any;
  name: any;

  emailError: any;
  passwordError: any;
  nameError:any;
  
  ngOnInit(): void {
  }
  register(){
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
    if(!this.name){
      this.nameError = "Please enter your name";
    }
    else{
      this.nameError = '';
    }

    if(this.emailError || this.passwordError || this.nameError){
      return false;
    }

    let value = { name: this.name, email: this.email, password: this.password};
    console.log(value)
    this.componentService.register(value).subscribe(res =>{
      if(res['success']){
        alert(res['message']);
        this.router.navigate(['login'])
      }
      else{
        alert(res['message'])
      }
    })
  }

}
