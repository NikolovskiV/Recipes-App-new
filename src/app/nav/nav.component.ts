import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentservicesService } from '../componentservices.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private componentService: ComponentservicesService,
              private router: Router) { }
  loginshow: any;
  name: any;
  nameError: any;
  ngOnInit(): void {
    let access_token = localStorage.getItem('access_token');
    if(access_token){
      this.loginshow = 0;
    }
    else{
      this.loginshow = 1;
    }
  }

  createList(){
    if(!this.name){
      this.nameError = "Please enter list name";
    }
    else{
      this.nameError = "";
    }
    if(this.nameError){
      return false;
    }
    let value = { name: this.name};
    this.componentService.createList(value).subscribe(res =>{
      if(res['success'] ==1){
        alert(res['message']);
        this.name = '';
        document.getElementById('closebutton').click();
      }
      else{
        alert(res['message']);
      }
    },
    error => {
        if(error.statusText == 'Unauthorized'){
          alert('Something went wrong')
        }
      },)
  }

  logout(){
    this.componentService.logout().subscribe(res =>{
      this.loginshow = 1;
      localStorage.removeItem("access_token");
      localStorage.removeItem("items");
      localStorage.removeItem("expires_in");
    })
  }

}
