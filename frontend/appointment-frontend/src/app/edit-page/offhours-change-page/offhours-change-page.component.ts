import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OffhoursServiceService } from './offhours-service.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-offhours-change-page',
  templateUrl: './offhours-change-page.component.html',
  styleUrls: ['./offhours-change-page.component.css']
})
export class OffhoursChangePageComponent {

  email: string  = ''
  fromOffTime: string = ''
  toffTime: string = ''
  successmessage: boolean = false
  errormessage: boolean = false
  offHoursPage: boolean = true

  constructor(private offHours : OffhoursServiceService, private sharedService: SharedService ) {}

  ngOnInit() {
    this.email = this.sharedService.getEmail() 
  }

  onSubmit(userForm: NgForm) {
    console.log("change hours details")
    console.log(userForm.value)
    this.offHours.updateOffHours(userForm.value, this.email).subscribe(
      d=> {
        if(d.modifiedCount > 0) {
          this.offHoursPage = false
          this.successmessage = true
        } else {
          this.offHoursPage = false
          this.errormessage = true
        }
    }, (error) => {
      console.log("error occured")
      console.log(error)
    })
  }
}
