import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from './../../_services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'OM - Transport Management System';
  showPassword = false;

  public loginForm: FormGroup;

  // Instead of using the FormBuilder, we could also construct the FormGroup manually:
  // import { FormGroup, FormControl } from '@angular/forms';
  // public loginForm = new FormGroup({
  //   email: new FormControl("email", Validators.required),
  //   password: new FormControl("password", Validators.required)
  // });

  private _loginService: LoginService;

  constructor(
    public fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this._loginService = loginService;

    this.loginForm = this.fb.group({
      user_id: ['', Validators.required],
      user_password: ['', Validators.required],
    });

    // this.loginForm.valueChanges.subscribe(data => {
    //   console.log('Form changes', this.loginForm);
    // })

  }

  ngOnInit(): void {
  }

  public doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
    const userid = this.loginForm.controls['user_id'].value;
    const password = this.loginForm.controls['user_password'].value;

    this._loginService.doLogin(userid, password).then(() => {
      if (this._loginService.isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    })


  }
  clearUserId(): void {
    this.loginForm.controls['user_id'].setValue('');
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
