import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor() { }

  admins:Admin[]=[
    new Admin("smith","smith123"),
    new Admin("admin","admin"),
    new Admin("goku","goku123"),
  ]
  checkUserNameAndPassword(uname:string,passwrd:string):boolean{
    var count=0;
    for(var i=0;i<this.admins.length;i++){
  
      if(this.admins[i].userName==uname && this.admins[i].password==passwrd){
        count++;
      }
    }
    if(count==1){
      return true;
    }else{
      return false;
    }
  
  }
  

}
