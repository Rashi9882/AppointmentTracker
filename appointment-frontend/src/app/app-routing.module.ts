import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PasswordChangePageComponent } from './edit-page/password-change-page/password-change-page.component';
import { OffhoursChangePageComponent } from './edit-page/offhours-change-page/offhours-change-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'appointment', component: AppointmentPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'password', component: PasswordChangePageComponent},
  { path: 'offhours', component: OffhoursChangePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
