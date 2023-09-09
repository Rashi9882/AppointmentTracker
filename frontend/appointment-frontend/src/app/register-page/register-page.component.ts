import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegistrationServiceService } from './registration-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  firstname: string = ''
  lastname: string = ''
  email: string = ''
  password: string = ''
  fromOffTime: string = ''
  toffTime: string = ''
  successfulMessage: boolean = false
  errorMessage: boolean = false

  constructor(private registrationService : RegistrationServiceService, private router: Router) {}

  onSubmit(userForm: NgForm) {
    this.registrationService.getRegister(userForm.value).subscribe(
      d => {
        this.successfulMessage = true
        this.router.navigate(['/login'])
      }, (error) => {
        console.log("error occured")
        console.log(error)      
      }
    )
  }
}
