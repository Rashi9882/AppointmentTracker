import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { LoginServiceService } from './login-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  email: string = ''
  password: string = ''
  successfulMessage: boolean = false
  errorMessage: boolean = false

  constructor(private router: Router, private loginService: LoginServiceService, private sharedService: SharedService) {}

  onSubmit(userForm: NgForm) {
    console.log("login credentials value")
    console.log(userForm.value)
    this.loginService.getLogin(userForm.value).subscribe(
      d => {
        console.log(d)
        if(d['message'] == 'Successfully LoggedIn') {
          this.sharedService.setEmail(userForm.value['email']);
          this.successfulMessage = true
          this.router.navigate(['/appointment'])
        }
        else {
          this.errorMessage = true
          setTimeout(() => window.location.reload(),1000)
        }
      }, (error) => {
        console.log("error occured")
        console.log(error)
      }
    )
  }
}
