import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url: string = 'login'
  constructor(private http: HttpClient) { }

  getLogin(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      map((response: any) => response)
    )
  }
}
