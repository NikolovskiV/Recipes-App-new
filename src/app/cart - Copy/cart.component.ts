import { Component, OnInit } from '@angular/core';
import { ComponentservicesService } from '../componentservices.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   items: any;
   idMeal: any;
   recipes: any;
   product: any;

   dataFromRecepies: any;
  id: string;
  idMeals: any;
  meals: any;
  strMeal: any;
  strArea: any;
  strMealThumb: any;
  strInstructions: any;
  strMeasure1: any;
  strIngredient1: any;
  strMeasure2: any;
  strIngredient2: any;
  strMeasure3: any;
  strIngredient3: any;
  strMeasure4: any;
  strIngredient4: any;
  strMeasure5: any;
  strIngredient5: any;
  strMeasure6: any;
  strIngredient6: any;
  strIngredient7: any;
  strMeasure7: any;
  strIngredient8: any;
  strMeasure8: any;
  strIngredient9: any;
  strMeasure9: any;
  strIngredient10: any;
  strMeasure10: any;
  strIngredient11: any;
  strMeasure11: any;
  strIngredient12: any;
  strMeasure12: any;
  strIngredient13: any;
  strMeasure13: any;
  strIngredient14: any;
  strMeasure14: any;
  strIngredient15: any;
  strMeasure15: any;
  strIngredient16: any;
  strMeasure16: any;
  strIngredient17: any;
  strMeasure17: any;
  strIngredient18: any;
  strMeasure18: any;
  strIngredient19: any;
  strMeasure19: any;
  strIngredient20: any;
  strMeasure20: any;

  constructor(private componentService: ComponentservicesService, private location: Location) { }



  ngOnInit(): void {
    // this.items = this.componentService.getItems();
    if(localStorage.getItem('access_token')){
        this.items = [];
        var currentItem;
        this.componentService.getItemsByuser().subscribe(res =>{
            var count = Object.keys(res).length;
            for(var i=0; i<count; i++){
                currentItem = JSON.parse(res[i]['recipe']);
                this.items.push(currentItem);
            }
            localStorage.setItem('items', JSON.stringify(this.items));
        });
    }
  }

  // onSubmit(): void{
  //   // Process checkout data here
  //   this.items = this.componentService.deleteItem();
  //   console.warn('Your order has been submitted');
  //   console.log(this.idMeal);
  // }

  removeItem(index: number): void { //get index from template and pass it to service, remove item in service
    if(confirm("Are you sure to delete ?")) {
      if(this.recipes && (this.items[index]['idMeal'] == this.recipes['idMeal'])){
        this.recipes = null;
      }
      this.items = this.componentService.removeItem(index);
       if(localStorage.getItem('access_token')){
            this.componentService.addToCart(this.items).subscribe(res =>{
            });
        }
    }
     
     //reload component so you get the new data with array without removed item
  }
    // this.items.splice(index, 1);
    // if (!this.ngOnInit) {
    //   return;

    //const index = this.items.indexOf(this.)
    // this.items.splice(index, 1);

  selecteItem(idMeal){
    this.componentService.getRecipe(idMeal).subscribe(res =>{
        this.recipes = res.meals[0];
        console.log(this.recipes)
      });
  }
  changeRoute(){
    this.location.back(); 
  }

}
