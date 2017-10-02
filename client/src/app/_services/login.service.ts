import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private APIUrl = 'http://localhost:3000/api/authenticate';
    private User_Id = 'devbrat.raghuvanshi';
    private User_Password = 'password';
    public isLoggedIn  = false;
    public  message = '';
    public authToken = '';
    constructor(private http: Http) { }

   public async doLogin (userid: string, password: string): Promise<any> {
       if (userid.trim() === '' || password.trim() === '' ) {
           this.message = 'invalid user id or password';
           this.isLoggedIn = false;
           return;
       }
           const body = JSON.stringify( {userId: userid, password: password });
           const headers = new Headers({ 'Content-Type': 'application/json' });
           const options = new RequestOptions({ headers: headers, method: 'post' });

           try {
            const res = await this.http.post(this.APIUrl, body, options).toPromise();
            const resObj =  res.json();
                 if (resObj.success) {
                  this.isLoggedIn = true;
                  this.authToken = resObj.token;
                 } else {
                  this.isLoggedIn = false;
                  this.message = resObj.msg;
                 }
           } catch (error) {
            console.error('An error occurred', error); // for demo purposes only
              //  this.handleError(error);
           }


    }
    public doLogOut(): void {
        this.isLoggedIn = false;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.json().message || error.json().msg || error);
    }
}
