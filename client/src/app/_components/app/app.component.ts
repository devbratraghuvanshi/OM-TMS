import { LoginService } from './../../_services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginService]
})
export class AppComponent implements OnInit {

  selectedComp = 'dashboard';
  constructor() { }

  ngOnInit() {
  }

}
