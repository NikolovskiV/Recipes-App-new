import { ComponentservicesService } from "./componentservices.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecepiesComponent } from "./recepies/recepies.component";
import { HttpClientModule } from "@angular/common/http";
import { AddRecepiesComponent } from "./add-recepies/add-recepies.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { CartComponent } from "./cart/cart.component";
import { SecureComponent } from "./secure/secure.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    AddRecepiesComponent,
    HeaderComponent,
    RecipeComponent,
    CartComponent,
    SecureComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ComponentservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
