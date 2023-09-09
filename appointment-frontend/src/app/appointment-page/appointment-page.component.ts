import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { AppointmentServiceService } from './appointment-service.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css']
})
export class AppointmentPageComponent {

  title: string = ''
  agenda: string = ''
  firstname: string = ''
  lastname: string = ''
  email: string = ''
  date: string = ''
  fromtime: string = ''
  totime: string = ''
  successfulMessage: boolean = false
  errorMessage: boolean = false
  appointmentPage: boolean = true

  constructor(private router: Router, private appointmentService: AppointmentServiceService) {}

  onSubmit(userForm: NgForm) {
    this.appointmentService.getAppointment(userForm.value).subscribe(
      d => {
        console.log("Line no 32")
        console.log(d)
        if(d.message == 'Appointment Fixed!')  {
          this.appointmentPage = false
          this.successfulMessage = true
        }
        if(d.message == 'Guest is not available. Please select another time slot.')  {
          this.appointmentPage = false
          this.errorMessage = true
        }
      }, (error) => {
        console.log("error occured")
        console.log(error.error.message)
        console.log(error)
      }
    )
  }
}
