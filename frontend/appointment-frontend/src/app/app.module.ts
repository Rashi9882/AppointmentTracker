import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PasswordChangePageComponent } from './edit-page/password-change-page/password-change-page.component';
import { OffhoursChangePageComponent } from './edit-page/offhours-change-page/offhours-change-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AppointmentPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    WelcomePageComponent,
    PasswordChangePageComponent,
    OffhoursChangePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
