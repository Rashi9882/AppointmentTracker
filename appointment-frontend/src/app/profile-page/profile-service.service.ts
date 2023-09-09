import { Injectable } from '@angular/core';
import { Observable, map, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  url: string = 'https://appointmenttracker.onrender.com/appointment/'
  _url: string = 'https://appointmenttracker.onrender.com/user/'

  constructor(private http: HttpClient) { }

  getUserAppointment(i: string): Observable<any> {
    return this.http.get(this.url + i, {
      responseType: 'json'
    }).pipe(
      timeout(60000)
    )
  }

  getUserData(i: string): Observable<any> {
    return this.http.get(this._url + i, {
      responseType: 'json'
    }).pipe(
      timeout(60000)
    )
  }


}
