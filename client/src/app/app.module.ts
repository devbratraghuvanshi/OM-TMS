import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { LoginComponent } from './_components/login/login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { AppComponent } from './_components/app/app.component';
import { HeaderComponent } from './_components/header/header.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
