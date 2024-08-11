import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { NamScvService } from './nam-scv.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardCls implements CanActivate
{
  constructor(
    private service:NamScvService){}

  canActivate()
  {
    console.log("step 2",this.canActivate)
    return this.service.isLoggin
  }
}