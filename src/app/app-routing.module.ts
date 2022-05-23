import { RecepiesComponent } from "./recepies/recepies.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRecepiesComponent } from "./add-recepies/add-recepies.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { CartComponent } from "./cart/cart.component";
import { SecureComponent } from "./secure/secure.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: RecepiesComponent },
  { path: "details", component: AddRecepiesComponent },
  { path: "recepies/:id", component: RecipeComponent },
  { path: "cart", component: CartComponent },
  { path: "secure", component: SecureComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "list/:id", component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
