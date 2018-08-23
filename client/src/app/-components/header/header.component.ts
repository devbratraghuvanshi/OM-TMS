import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  BrandName = 'OM-TMS';
  UserName = 'Devbrat Raghuvanshi';
  constructor(private loginService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.loginService.doLogOut();
    this.router.navigate(['/login']);
  }

}
