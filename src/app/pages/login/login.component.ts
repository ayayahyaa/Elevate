import { Component } from '@angular/core';
import { AuthNavbarComponent } from "../../layouts/auth-navbar/auth-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AuthNavbarComponent , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
