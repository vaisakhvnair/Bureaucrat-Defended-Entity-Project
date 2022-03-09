import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerLoginService } from '../data-manager-login.service';

@Component({
  selector: 'app-data-manager-login',
  templateUrl: './data-manager-login.component.html',
  styleUrls: ['./data-manager-login.component.css']
})
export class DataManagerLoginComponent implements OnInit {

  username: string = "";
  upasswd: string = "";
  msg: string = "";

  constructor(private sobj:DataManagerLoginService,private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getValidation(tx1: any) {

    var b = this.sobj.checkUserNameAndPassword(this.username, this.upasswd)

    if(b) {
      this.msg = "successful login";
      setTimeout(() => {
        this.router.navigate(['/manager'])
      },2000)
     
    } else {
      this.msg = " login failed";
      //this.username="";
      this.upasswd="";
      tx1.focus();
    }
}
}
