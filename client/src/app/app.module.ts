import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './_components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
