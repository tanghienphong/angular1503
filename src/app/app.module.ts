import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ChildrenComponent } from './interact/children.component';
import { ParentComponent } from './interact/parent.component';
import { AddProductComponent } from './product/add-product.component';
import { ItemProductComponent } from './product/item-product.component';
import { FilterProductComponent } from './product/filter-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroComponent,
    SignupComponent,
    ProductComponent,
    ChildrenComponent,
    ParentComponent,
    AddProductComponent,
    ItemProductComponent,
    FilterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
