import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import Swal from 'sweetalert2'

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
 
  constructor(private sobj:DataManagerService,private router: Router, private activeRouter: ActivatedRoute) { 
    
  }

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
      //this.msg = "Successful login "+this.username +":)";
      setTimeout(() => {
        this.tinyAlert()
        this.router.navigate(['/manager'])
      },2000)
     
    } else { 
      
     // this.msg = " login failed...!";
      //this.username="";
     this.tinyAlert1()
      this.upasswd="";
      tx1.focus();
     
    }
}
tinyAlert() {
  Swal.fire('', 'Login Success !', 'success');
}
tinyAlert1() {
  Swal.fire('Oops...', 'Login Failed !', 'error')
}
}
