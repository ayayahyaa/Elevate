import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor( private _authApiService: AuthApiService ,   private  _formBuilder: FormBuilder, private _router: Router){}

  isLoading : boolean = false ;
  msgError :string = ""
  isSuccess :string = ""



  registerForm: FormGroup = new FormGroup ({
    username: new FormGroup (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ),
    firstName: new FormGroup (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ),
    lastName: new FormGroup (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ),
    email: new FormGroup (null , [Validators.required , Validators.email ]),
    password: new FormGroup (null , [Validators.required , Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormGroup (null , [Validators.required , Validators.pattern(/^\w{6,}$/)]),
    phone: new FormGroup (null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },)



  submitRegister(){
    if(this.registerForm.valid){
      this._authApiService.register(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if(res.message === 'success'){
            setTimeout(() => {
              this._router.navigate(['/login']);
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
    }else{
      this.registerForm.markAllAsTouched();
    }
    }


  confirmPassword (groub : AbstractControl){
    const password = groub.get('password')?.value;
    const rePassword = groub.get('rePassword')?.value;
    return password === rePassword ? null : {mismatch:true}
  }

}
