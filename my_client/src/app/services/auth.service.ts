import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  admin: any;
  baseURL = 'http://localhost:3000/admin';


  constructor(private http: HttpClient,private router: Router,public jwtHelper: JwtHelperService) { }

  // registerAdmin(admin){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   return this.http.post(`${baseURL}/register`, admin, {headers: headers}).map(res=>res.json);
  // }
  
  public isAuthenticated(): Boolean {
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  authenticateAdmin(admin: any) {
    return this.http.post(`${this.baseURL}/authenticate`, admin);
  
  }
  getDashboard(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken)
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.baseURL}/dashboard`, {headers: headers}).pipe(map(res => JSON.stringify(res)))
  }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token;
  }

  storeAdminData(token, admin) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('admin', JSON.stringify(admin))
    this.authToken = token;
    this.admin = admin;
  }

  logOut() {
    this.authToken = null;
    this.admin = null;
    localStorage.clear();
  }

  // loggedIn(){
  //   return tokenNotExpired();
  // }

  // async canActivate() {
  //   const token = localStorage.getItem("accessToken");

  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }

  //   const isRefreshSuccess = await this.refreshingTokens(token);
  //   if (!isRefreshSuccess) {
  //     this.router.navigate(["admin/login"]);
  //   }
  //   return isRefreshSuccess;
  // }

  // private async refreshingTokens(token: string | null): Promise<boolean> {
  //   const refreshToken: string | null = localStorage.getItem("refreshToken");

  //   if (!token || !refreshToken) {
  //     return false;
  //   }

  //   const tokenModel = JSON.stringify({ accessToken: token, refreshToken: refreshToken });

  //   let isRefreshSuccess: boolean;
  //   try {
  //     const response = await lastValueFrom(this.http.post(environment.baseUrl + "authenticate/refresh-token", tokenModel));
  //     const newToken = (<any>response).accessToken;
  //     const newRefreshToken = (<any>response).refreshToken;
  //     localStorage.setItem("accessToken", newToken);
  //     localStorage.setItem("refreshToken", newRefreshToken);
  //     isRefreshSuccess = true;
  //   }
  //   catch (ex) {
  //     isRefreshSuccess = false;
  //   }
  //   return isRefreshSuccess;
  // }

}

