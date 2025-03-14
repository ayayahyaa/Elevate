import { Component } from '@angular/core';
import { AuthNavbarComponent } from '../../layouts/auth-navbar/auth-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  imports: [RouterLink],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

}
