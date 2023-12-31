import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  email: string = '';

  setEmail(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}
