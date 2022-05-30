import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseUrl = "http://localhost:3000/hotel";

  constructor(private _http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this._http.get<Hotel[]>(`${this.baseUrl}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getHotelById(id: any) {
    return this._http.get(`${this.baseUrl}/` + id)
  }

  getByPlace(city: any) {
    return this._http.get(`${this.baseUrl}/city/${city}`)
  }

  deleteHotel(id: any){
    return this._http.delete(`${this.baseUrl}/${id}`)
  }

  postHotel(data: any){
    return this._http.post(`${this.baseUrl}`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }


  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }
  // find(_id:any):Observable<Hotel>{
  //   return this._http.get<Hotel>(`${this.baseUrl}/hotel`).pipe(

  //   )
  // }
}
