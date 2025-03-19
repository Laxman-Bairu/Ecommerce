import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Import Observable
import { catchError } from 'rxjs/operators';  // For handling errors
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  api:any = 'http://localhost:3000/api/getUsers'
  getPosts(): Observable<any> {
    return this.http.get<any>(this.api).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }
}
