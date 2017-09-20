import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './_components/login/login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { AppComponent } from './_components/app/app.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
