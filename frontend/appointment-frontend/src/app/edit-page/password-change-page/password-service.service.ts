import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {

  url: string = 'https://appointmenttracker.onrender.com/update/password/'
  constructor(private http: HttpClient) { }

  updatePassword(data: any, i: string): Observable<any> {

    return this.http.patch(this.url + i, data).pipe(
      map((response: any) => response)
    )
    }
}
