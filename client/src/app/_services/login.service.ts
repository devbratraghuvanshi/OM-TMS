import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

    private APIUrl = '';
    private User_Id = '';
    private User_Password = '';
    public isLoggedIn  = false;

   public doLogin(): void {
        this.isLoggedIn = true;
    }
    public doLogOut(): void {
        this.isLoggedIn = false;
    }
}
