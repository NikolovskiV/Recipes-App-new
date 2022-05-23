import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { RecipeComponent } from "./recipe/recipe.component";

@Injectable({
  providedIn: "root",
})
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
export class ComponentservicesService {
  constructor(private http: HttpClient) {}
  url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  filterUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  recipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  laravelUrl = "http://127.0.0.1:8000";
  getRecipies() {
    return this.http.get<any>(this.url);
  }
  getFilteredRecipes(category: string) {
    return this.http.get<any>(this.filterUrl + category);
  }
  getRecipe(id: string) {
    return this.http.get<any>(this.recipeUrl + id);
  }
  items: RecipeComponent[] = [];

  addToCartLocal(product) {
    var exists = 0;
    this.items.forEach((element) => {
      if (element["idMeal"] == product["idMeal"]) {
        exists = 1;
        return false;
      }
    });
    if (exists == 0) {
      this.items.push(product);
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  }

  addToCart(allitems) {
    this.items = allitems;
    return this.http.post(`${this.laravelUrl}/api/auth/savelist`, this.items, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  getItems() {
    return this.items;
  }

  // removeItem(index) {
  //   // remove item from arrray using index (splice for instance)
  //   this.items = JSON.parse(localStorage.getItem("items"));console.log(index)
  //   this.items.splice(index, 1);
  //   localStorage.setItem('items', JSON.stringify(this.items));
  //   return this.items;

  // }

  login(user) {
    return this.http.post(`${this.laravelUrl}/api/auth/login`, user);
  }
  register(user) {
    return this.http.post(`${this.laravelUrl}/api/auth/register`, user);
  }

  logout() {
    return this.http.post(`${this.laravelUrl}/api/auth/logout`, [], {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  getItemsByuser() {
    return this.http.post(`${this.laravelUrl}/api/auth/get-item-user`, [], {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  createList(listname) {
    return this.http.post(`${this.laravelUrl}/api/auth/create-list`, listname, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  getListNames() {
    return this.http.post(`${this.laravelUrl}/api/auth/get-list-name`, [], {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  saveitems(value) {
    return this.http.post(`${this.laravelUrl}/api/auth/save-item`, value, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  getitembylistbyid(value) {
    return this.http.post(`${this.laravelUrl}/api/auth/item-list-byid`, value, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }

  removeItem(value) {
    return this.http.post(`${this.laravelUrl}/api/auth/item-delete`, value, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }).set("Authorization", `Bearer ${localStorage.getItem("access_token")}`),
    });
  }
}
