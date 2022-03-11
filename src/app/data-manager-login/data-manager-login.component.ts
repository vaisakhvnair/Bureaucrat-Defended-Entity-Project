import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerLoginService } from '../data-manager-login.service';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-data-manager-login',
  templateUrl: './data-manager-login.component.html',
  styleUrls: ['./data-manager-login.component.css']
})
export class DataManagerLoginComponent implements OnInit {

  username: string = "";
  upasswd: string = "";
  msg: string = "";
  //status:string="";
  myClass:string="";
  datam:DataManager[]=[];
  constructor(private sobj:DataManagerService,private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  checkUserNameAndPassword(uname:string,passwrd:string):boolean{
    this.sobj.getAllDataManager().subscribe(data=>{
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
  getValidation(tx1: any) {

    var b = this.checkUserNameAndPassword(this.username, this.upasswd)
    if(b) {
      this.msg = "Successful login "+this.username +":)";
      setTimeout(() => {
        this.router.navigate(['/manager'])
      },2000)
     
    } else { 
      this.msg = " login failed...!";
      //this.username="";
      this.upasswd="";
      tx1.focus();
    }
}
}
