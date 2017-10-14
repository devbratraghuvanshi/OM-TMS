import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

    private APIUrl = 'http://localhost:3000/api/authenticate';
    private StatusUrl = 'http://localhost:3000/api/status';
    public isLoggedIn = false;
    public message = '';
    public authToken = '';
    constructor(private http: Http) { }

    public async doLogin(userid: string, password: string): Promise<any> {
        if (userid.trim() === '' || password.trim() === '') {
            this.message = 'invalid user id or password';
            this.isLoggedIn = false;
            return;
        }
        const body = JSON.stringify({ userId: userid, password: password });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers, method: 'post' });

        try {
            const res = await this.http.post(this.APIUrl, body, options).toPromise();
            const resObj = res.json();
            if (resObj.success) {
                this.isLoggedIn = true;
                this.authToken = resObj.token;
                localStorage.setItem('token', resObj.token);
            } else {
                this.isLoggedIn = false;
                this.message = resObj.msg;
                localStorage.removeItem('token');
            }
        } catch (error) {
            console.error('An error occurred', error); // for demo purposes only
            //  this.handleError(error);
        }


    }
    public doLogOut(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('TokenStatus');
        this.isLoggedIn = false;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.json().message || error.json().msg || error);
    }

    public IsAuthenticated(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const token = localStorage.getItem('token');
            if (token) {
                if (this.TokenStatus()) {
                    resolve(true);
                }else {
                    const headers = new Headers({ 'Content-Type': 'application/json', Authorization: token });
                    this.http.get(this.StatusUrl, { headers: headers }).toPromise().then((res) => {
                        localStorage.setItem('TokenStatus', res.json().status);
                        if (res.json().status) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })
                }
            } else {
                resolve(false);
            }
        });

    }

    public TokenStatus(): boolean {
        // change this logic to return  false if token is more than 2hr old and
        // black list token on server
        return localStorage.getItem('TokenStatus') === 'true' ;
    }

}
