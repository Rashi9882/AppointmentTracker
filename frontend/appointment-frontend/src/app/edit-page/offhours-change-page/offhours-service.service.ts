import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OffhoursServiceService {

  url: string = 'update/userhours/'
  constructor(private http: HttpClient) { }

  updateOffHours(data: any, i: string): Observable<any> {
    return this.http.patch(this.url + i, data).pipe(
      map((response: any) => response)
    )
  }
}
