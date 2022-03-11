import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';
import { Message } from '../message';

@Component({
  selector: 'app-admin-duty-register-create',
  templateUrl: './admin-duty-register-create.component.html',
  styleUrls: ['./admin-duty-register-create.component.css']
})
export class AdminDutyRegisterCreateComponent implements OnInit {

  datman: DutyRegister = new DutyRegister("","","","","","");
  message: Message = new Message("","");

  constructor(private service: DutyRegisterService, private router: Router,private location: Location) { }
  ngOnInit(): void {
  }
  createDutyRegister() {
    this.service.createDutyRegister(this.datman).subscribe(data => { this.message = data; });
    this.datman = new DutyRegister("","","","","","");
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
  back(): void {
    this.location.back()
  }

}
