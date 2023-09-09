import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  url: string = 'register'

  constructor(private http: HttpClient) { }

  getRegister(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      map((response: any) => response)
    )
  }
}
