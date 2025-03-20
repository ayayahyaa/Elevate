import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    constructor(private _authApiService: AuthApiService , private _router:Router){}

    isLoading : boolean = false ;
    msgError :string = ""
    isSuccess :string = ""


  loginForm : FormGroup = new FormGroup ({
    email : new FormControl (null,[Validators.email]),
    password : new FormControl (null,[Validators.required,Validators.pattern(/^[A-Z]\w{7,}$/)]),
  },
  );

  submitLogin(){
    if (this.loginForm.valid){
      this.isLoading = true;

    console.log(this.loginForm.value);
    this._authApiService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if( res.message === 'success'){
          setTimeout(() => {
          this._router.navigate(['/home']);
          }, 1000);
          this.isSuccess = res.message
        }
        this.isLoading = false;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.msgError = err.error.message
        this.isLoading = false;
      },
    })
      }
    }
}


