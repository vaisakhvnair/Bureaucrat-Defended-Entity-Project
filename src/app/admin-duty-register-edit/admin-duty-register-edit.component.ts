import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';

@Component({
  selector: 'app-admin-duty-register-edit',
  templateUrl: './admin-duty-register-edit.component.html',
  styleUrls: ['./admin-duty-register-edit.component.css']
})
export class AdminDutyRegisterEditComponent implements OnInit {

  datman: DutyRegister = new DutyRegister("","","","","","");
  un:string="";

  constructor(private service: DutyRegisterService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.datman = new DutyRegister("","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOneDutyRegister(this.un).subscribe(data => { this.datman = data; });
  }
  updateDutyReg() {
    this.service.updateDutyRegister(this.datman).subscribe(data => {
      console.log(data), this.router.navigate(['/duty-all']);
    });
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
  back(): void {
    this.location.back()
  }


}
