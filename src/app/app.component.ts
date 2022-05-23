import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipies-app';
  seconds: number;
  logouttime: number;

  ngOnInit(): void {
    if(localStorage.getItem('access_token')){
      this.seconds = new Date().getTime() / 1000;
      this.logouttime = JSON.parse(localStorage.getItem('expires_in'));
      if(this.seconds > this.logouttime){
        localStorage.removeItem("access_token");
        localStorage.removeItem("items");
        localStorage.removeItem("expires_in");
      }
    }
  }
}

