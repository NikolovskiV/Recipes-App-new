import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentservicesService } from '../componentservices.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  constructor(private componentService: ComponentservicesService,
              private router: Router) { }
  imageFromResult: any;
  imageFromResultTwo: any;
  imageFromResultThree: any;
  imageFromResultFour: any;
  imageFromResultFive: any;
  imageFromResultSex: any;
  imageFromResultOta: any;
  imageFromResultNio: any;
  imageFromResultTio: any;
  imageFromResultTolw: any;
  imageFromResultTreton: any;
  imageFromResultFurtom: any;
  imageFromResultFemton: any;
  listToSend: any;
  imageFromResultElva: any;
  loginshow: any
  ngOnInit(): void {
    let access_token = localStorage.getItem('access_token');
    if(access_token){
      this.loginshow = 0;
    }
    else{
      this.loginshow = 1;
    }
    this.getResults();
  }
  changeRoute(category = 'beef'){
    //this.router.navigate(['details'], {state: {data: this.listToSend}})
    //console.log(category)
    this.router.navigate(['details'], {state: {data: category}})
  }

  getResults(){
    this.componentService.getRecipies().subscribe(res =>{
      // console.log('results ' + JSON.stringify(res))
      console.log(res)
        this.listToSend = res.categories[0];
        this.imageFromResult = res.categories[0].strCategoryThumb;
        this.imageFromResultTwo = res.categories[2].strCategoryThumb;
        this.imageFromResultThree = res.categories[6].strCategoryThumb;
        this.imageFromResultFour = res.categories[1].strCategoryThumb;
        this.imageFromResultFive = res.categories[7].strCategoryThumb;
        this.imageFromResultSex = res.categories[3].strCategoryThumb;
        this.imageFromResultOta = res.categories[5].strCategoryThumb;
        this.imageFromResultNio = res.categories[4].strCategoryThumb;
        this.imageFromResultTio = res.categories[8].strCategoryThumb;
        this.imageFromResultElva = res.categories[9].strCategoryThumb;
        this.imageFromResultTolw = res.categories[10].strCategoryThumb;
        this.imageFromResultTreton = res.categories[11].strCategoryThumb;
        this.imageFromResultFurtom = res.categories[12].strCategoryThumb;
        this.imageFromResultFemton = res.categories[13].strCategoryThumb;
    })
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
