import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ICity } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url_city: string = "../../assets/data/city.json";


  constructor(private _http: HttpClient) { }
  // Render city 
  getCityData(): Observable<ICity[]> {
    return this._http.get<ICity[]>(this.url_city)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }



}
