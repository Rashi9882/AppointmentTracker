import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProfileServiceService } from './profile-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  email: string = ''
  appointment: any = []
  p: number = 1
  name: string = ''
  editClick: boolean = false

  constructor(private sharedService: SharedService, private profileService: ProfileServiceService) {}

  ngOnInit() {
    this.email = this.sharedService.getEmail() 
    this.upcomingMeeting()
    this.userDetail()
  }
  
  edit() {
    this.editClick = true
  }

  upcomingMeeting() {
    console.log("Inside upcoming events")
    this.profileService.getUserAppointment(this.email).subscribe((data: any) => {
      this.appointment = data['body']
    }, (error) => {
      console.log("error ocurred")
      console.log(error)
    })

    console.log("List of appointment")
    console.log(this.appointment)
  }

  userDetail() {
    this.profileService.getUserData(this.email).subscribe((data: any) => {
      this.name = data['body'][0]['firstname'] + " " + data['body'][0]['lastname']
    }, (error) => {
      console.log("error occured")
      console.log(error)
    })
  }
}
