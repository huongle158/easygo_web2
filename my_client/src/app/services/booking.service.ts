import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http: HttpClient) { }

  baseUrl = "http://localhost:3000/booking";
  
  getBookings(): Observable<Booking[]> {
    return this._http.get<Booking[]>(`${this.baseUrl}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message))
  }

}
