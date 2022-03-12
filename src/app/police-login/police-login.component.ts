import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-police-login',
  templateUrl: './police-login.component.html',
  styleUrls: ['./police-login.component.css']
})
export class PoliceLoginComponent implements OnInit {

  userName:string="";
  password:string="";
  msg:string="";
  pol:Police[]=[];

  constructor(private sobj: PoliceService,private router: Router, private activeRouter: ActivatedRoute) { 
    
  }

  
  ngOnInit(): void {
  }
  checkUsernameAndPassword(uname:string,upassword:string):boolean{
    this.sobj.getAllPolice().subscribe(data=>{
      this.pol=data;
    })
    var count=0;
    for(var i=0;i<this.pol.length;i++){
      if(this.pol[i].userName==uname && this.pol[i].password==upassword){
        count++;
      }
    }
    if(count==1){
     return true;
  }
  else{
    return false;
  }
}

 getValidation(tx1: any){
   var b=this.checkUsernameAndPassword(this.userName,this.password)
   if(b){
     this.msg="successful login"+this.userName+" !";
     setTimeout(() => {
       this.router.navigate(['/police'])
       
     }, 2000)
   }else{
     this.msg="login failed";
     //this.userName="";
     this.password="";
     tx1.focus();
   }
 }

}


