import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  baseURL = 'http://localhost:3000/admin'

  constructor(private http: HttpClient) { }

  // registerAdmin(admin){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   return this.http.post(`${baseURL}/register`, admin, {headers: headers}).map(res=>res.json);
  // }
  
  authenticateAdmin(admin: any){
    return this.http.post(`${this.baseURL}/authenticate`, admin);
  }

}
