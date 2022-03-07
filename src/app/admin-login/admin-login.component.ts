import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, delayWhen } from 'rxjs';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: string = "";
  upasswd: string = "";
  msg: string = "";

  constructor(private sobj: AdminLoginService,private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getValidation(tx1: any) {

    var b = this.sobj.checkUserNameAndPassword(this.username, this.upasswd)

    if(b) {
      this.msg = "successful login";
      setTimeout(() => {
        this.router.navigate(['/admin'])
      },2000)
     
    } else {
      this.msg = " login failed";
      //this.username="";
      this.upasswd="";
      tx1.focus();
    }

  }


}
