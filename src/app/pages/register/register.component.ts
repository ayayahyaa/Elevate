import { Component } from '@angular/core';
import { AuthNavbarComponent } from '../../layouts/auth-navbar/auth-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
