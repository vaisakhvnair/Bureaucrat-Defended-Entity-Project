import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, delayWhen } from 'rxjs';
import { AdminLoginService } from '../admin-login.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: string = "";
  upasswd: string = "";
  msg: string = "";


  constructor(private sobj: AdminLoginService,private router: Router, private activeRouter: ActivatedRoute,
    private http:HttpClientModule) { }

  ngOnInit(): void {
  }
  getValidation(tx1: any) {

    var b = this.sobj.checkUserNameAndPassword(this.username, this.upasswd)

    if(b) {
      //this.msg = "Successful Login";
      this.tinyAlert()
      setTimeout(() => {
        this.router.navigate(['/admin'])
      },2000)
      
  
     
    } else {
     // this.msg = " login failed !";
      this.tinyAlert1()
      //this.username="";
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
