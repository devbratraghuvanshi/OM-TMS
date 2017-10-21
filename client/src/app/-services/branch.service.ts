import { Branch } from './../models/branch.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BranchService {

  private branchUrl = 'http://localhost:3000/api/branch';

  constructor(private http: Http) {

  }

 public GetBranches(): Promise<Branch[]> {
  const headers = new Headers({ 'Content-Type': 'application/json', Authorization: localStorage.getItem('token') });
  const options = new RequestOptions({ headers: headers,  method: 'GET' });
    return this.http.get(this.branchUrl, options).toPromise()
      .then(res => res.json() as Branch[])
      .catch(this.handleError);
  }

  public AddBranch(branch: Branch): Promise<Branch>  {
    const headers = new Headers({ 'Content-Type': 'application/json', Authorization: localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers,  method: 'post' });
    return this.http.post(this.branchUrl, JSON.stringify(branch), options).toPromise()
    .then(res => res.json() as Branch).catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
