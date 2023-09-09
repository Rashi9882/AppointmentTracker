import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { PasswordServiceService } from './password-service.service';

@Component({
  selector: 'app-password-change-page',
  templateUrl: './password-change-page.component.html',
  styleUrls: ['./password-change-page.component.css']
})
export class PasswordChangePageComponent {

  oldpassword: string = ''
  newpassword: string = ''
  confirmnewpassword: string = ''
  email: string = ''
  passwordPage: boolean = true
  successmessage: boolean = false
  errormessage: boolean = false

  constructor(private sharedService: SharedService, private passwordService : PasswordServiceService) {}

  ngOnInit() {
    this.email = this.sharedService.getEmail() 
  }

  onSubmit(userForm: NgForm) {
    console.log("change password details")
    console.log(userForm.value)
    this.passwordService.updatePassword(userForm.value, this.email).subscribe(
      d=> {
        console.log("Response from api")
        console.log(d)
        if(d.modifiedCount > 0) {
          this.passwordPage = false
          this.successmessage = true
        } else {
          this.passwordPage = false
          this.errormessage = true
        }
    }, (error) => {
      console.log("error occured")
      console.log(error)
    })
  }
}
