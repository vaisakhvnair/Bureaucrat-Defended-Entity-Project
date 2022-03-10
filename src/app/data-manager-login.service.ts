import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from './data-manager';
import { DataManagerLogin } from './data-manager-login';
import { DataManagerService } from './data-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagerLoginService {

  manager:DataManagerLogin[]=[
    new DataManagerLogin("smith","smith123"),
    new DataManagerLogin("admin","admin"),
    new DataManagerLogin("goku","goku123"),
  ]
  datam:DataManager[]=[];
  constructor(private doj:DataManagerService ,private router:Router ){}
  /*
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
  
  */
 checkUserNameAndPassword(uname:string,passwrd:string):boolean{
   this.doj.getAllDataManager().subscribe(data=>{
     this.datam=data;
   })
   var count=0;
   for(var i=0;i<this.datam.length;i++){
  
    if(this.datam[i].userName==uname && this.datam[i].password==passwrd){
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
