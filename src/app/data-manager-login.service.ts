import { Injectable } from '@angular/core';
import { DataManagerLogin } from './data-manager-login';

@Injectable({
  providedIn: 'root'
})
export class DataManagerLoginService {

  manager:DataManagerLogin[]=[
    new DataManagerLogin("smith","smith123"),
    new DataManagerLogin("admin","admin"),
    new DataManagerLogin("goku","goku123"),
  ]
  checkUserNameAndPassword(uname:string,passwrd:string):boolean{
    var count=0;
    for(var i=0;i<this.manager.length;i++){
  
      if(this.manager[i].userName==uname && this.manager[i].password==passwrd){
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
