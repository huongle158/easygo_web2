import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  readonly api_url = 'http://localhost:3000/upload'

  constructor(private _http: HttpClient) { }

  uploadData(data: any) {
    return this._http.post(`${this.api_url}/upFile`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getAllProducts(){
    return this._http.get(`${this.api_url}/uploadedFile`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

}
