import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../../../projects/auth-api/src/public-api';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  constructor( private _authApiService: AuthApiService , private _router: Router){}

  step: number = 1;

  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
  });

  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  });


  verifyEmailSubmit(): void {
    let emailValue = this.verifyEmail.get('email')?.value
    this.resetPassword.get('email')?.patchValue(emailValue)

    this._authApiService.forgotPassword(this.verifyEmail.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.message === 'success') {
          this.step = 2;
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



  verifyCodeSubmit(): void {
    this._authApiService.verifyCode(this.verifyCode.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.message === 'success') {
          this.step = 3;
        }
      },
      error: (err) => {
        console.log(err)
      }
    }
    )
  }


  resetPasswordSubmit(): void {
    this._authApiService.resetPassword(this.resetPassword.value).subscribe({
      next: (res) => {
        console.log(res)
        this._router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }





}
