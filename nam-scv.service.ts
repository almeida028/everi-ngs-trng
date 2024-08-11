import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NamScvService {

  isLoggin=false
  userName=""
  constructor() { 
    let data = localStorage.getItem("login") 
    if(data){
     this.isLoggin=!!data
    }
   }
  

  onInit(){}

  Loginfnc(){
    this.isLoggin=true
    this.userName="riya"
    localStorage.setItem("login",this.isLoggin+"")
  }

  logOutfnc(){
    this.isLoggin=true
    this.userName=""
    localStorage.setItem("login","")
  }
}
