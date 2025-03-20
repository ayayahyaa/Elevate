import { Injectable } from '@angular/core';
import { Iadaptor } from '../interface/iadaptor';

import { IloginAPIData, IloginResData } from '../interface/IloginRes';
import { IforgotAPIData, IforgotResData } from '../interface/IforgotResData';
import { IverifyAPIData, IverifyResData } from '../interface/IverifyResData';
import { IresetAPIData, IresetResData } from '../interface/IresetResData';
import { IregisterAPIData , IregisterResData } from './../interface/IRegisterResData';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdaptorService implements Iadaptor {

  constructor() { }

  loginAdaptor(data:IloginAPIData): IloginResData{
    return {
      message:data.message,
      token:data.token,
      userEmail:data.user.email
    }
  }

  registerAdaptor(data:IregisterAPIData): IregisterResData{
    return {
      message:data.message,
      token:data.token,
      userEmail:data.user.email
    }
  }


  forgotAdaptor(data:IforgotAPIData): IforgotResData{
    return{
      message:data.message,
      info:data.info
    }
  }

  verifyAdaptor(data:IverifyAPIData): IverifyResData {
    return{
      message:data.message,
      code:data.code
    }
  }

  resetAdaptor(data: IresetAPIData): IresetResData {
    return{
      message:data.message
    }}

}
