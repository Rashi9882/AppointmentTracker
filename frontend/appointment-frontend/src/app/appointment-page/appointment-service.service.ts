import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  url: string = 'appointment'

  constructor(private http: HttpClient) {}

  getAppointment(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      map((response: any) => response)
    )
  }
}
