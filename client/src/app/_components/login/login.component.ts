import { Router  } from '@angular/router';
import { LoginService } from './../../_services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'MO - Transport Management System';
  private _loginService: LoginService;
  constructor(
    private loginService: LoginService,
    private router: Router) {
    this._loginService = loginService;
  }
  ngOnInit(): void {
  }

  public doLogin() {
   this._loginService.doLogin();
    if (this._loginService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }
}
