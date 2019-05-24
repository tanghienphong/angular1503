import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeroComponent} from './components/hero.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent, UserComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
