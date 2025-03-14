import { Component } from '@angular/core';
import { AuthNavbarComponent } from '../../layouts/auth-navbar/auth-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

}
