import { Component, OnInit } from '@angular/core';
import { ComponentservicesService } from '../componentservices.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-recepies',
  templateUrl: './add-recepies.component.html',
  styleUrls: ['./add-recepies.component.css']
})
export class AddRecepiesComponent implements OnInit {

  constructor(private componentService: ComponentservicesService, private router: Router) {
    //https://stackoverflow.com/a/54365098/12683933
    // console.log("=============")
    this.mealName = this.router.getCurrentNavigation().extras.state.data;
    // console.log("=============")
  }
  dataFromRecepies: any;
  mealName: string;
  recipes: any;

  ngOnInit(): void {

   this.getData();
  }

    getData(){
      //this.dataFromRecepies = history.state.data;
      //console.log("this.dataFromRecepies -> " + JSON.stringify(this.dataFromRecepies));
      //this.mealName = this.dataFromRecepies.strCategory;
      this.componentService.getFilteredRecipes(this.mealName).subscribe(res =>{
        this.recipes = res.meals
        console.log(this.recipes)
      });

    }

}
