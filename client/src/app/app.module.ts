import { BranchService } from './-services/branch.service';
import { AuthService } from './-services/auth.service';
import { AuthGuard } from './-services/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './-components/login/login.component';
import { DashboardComponent } from './-components/dashboard/dashboard.component';
import { AppComponent } from './-components/app/app.component';
import { HeaderComponent } from './-components/header/header.component';
import { SidebarComponent } from './-components/sidebar/sidebar.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BranchesComponent } from './-components/branches/branches.component';
import { PartiesComponent } from './-components/parties/parties.component';
import { TrucksComponent } from './-components/trucks/trucks.component';
import { DriversComponent } from './-components/drivers/drivers.component';
import { StationsComponent } from './-components/stations/stations.component';
import { DialogComponent } from './-components/dialog/dialog.component';
import { BranchComponent } from './-components/branch/branch.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'branches', pathMatch: 'full' },
      { path: 'branches',  component: BranchesComponent },
      { path: 'parties',  component: PartiesComponent },
      { path: 'trucks',  component: TrucksComponent },
      { path: 'drivers',  component: DriversComponent },
      { path: 'stations',  component: StationsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BranchesComponent,
    PartiesComponent,
    TrucksComponent,
    DriversComponent,
    StationsComponent,
    DialogComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
