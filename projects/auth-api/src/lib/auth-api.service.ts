import { IloginResData } from './interface/IloginRes';
import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthAPI.endPoints';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { IloginData } from './interface/IloginData';
import { IregisterData } from './interface/IregisterData';
import { IregisterResData } from './interface/IRegisterResData';
import { IforgotData } from './interface/IforgotData';
import { IforgotResData } from './interface/IforgotResData';
import { IverifyAPIData, IverifyResData } from './interface/IverifyResData';
import { IresetResData } from './interface/IresetResData';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI {

  constructor(private _httpClient :HttpClient, private _authAPIAdaptorService :AuthAPIAdaptorService) { }

    login(data: IloginData): Observable<IloginResData> {
      return this._httpClient.post(AuthEndPoint.LOGIN , data).pipe(
        map ((res:any) => this._authAPIAdaptorService.loginAdaptor(res)),
        catchError((err) => of(err))
      )
  }

  register(data: IregisterData): Observable<IregisterResData> {
    return this._httpClient.post(AuthEndPoint.REGISTER , data).pipe(
      map ((res:any) => this._authAPIAdaptorService.registerAdaptor(res)),
      catchError((err) => of(err))
    )
}



forgotPassword(data: IforgotData): Observable<IforgotResData> {
  return this._httpClient.post(AuthEndPoint.FORGET_PASSWORD , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.forgotAdaptor(res)),
    catchError((err) => of(err))
  )
}

verifyCode(data: IverifyAPIData): Observable<IverifyResData> {
  return this._httpClient.post(AuthEndPoint.VERIFY_CODE , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.verifyAdaptor(res)),
    catchError((err) => of(err))
  )
}


resetPassword(data: IresetResData): Observable<IresetResData> {
  return this._httpClient.put(AuthEndPoint.RESET_PASSWORD , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.resetAdaptor(res)),
    catchError((err) => of(err))
  )
}
}
