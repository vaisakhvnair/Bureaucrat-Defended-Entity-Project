import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../message';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-admin-pay-roll-create',
  templateUrl: './admin-pay-roll-create.component.html',
  styleUrls: ['./admin-pay-roll-create.component.css']
})
export class AdminPayRollCreateComponent implements OnInit {


  datman: PayRoll = new PayRoll("","","","","","");
  message: Message = new Message("","");
  myform:FormGroup;

  constructor(private service: PayRollService, private router: Router,private location: Location) { 
    this.myform=new FormGroup({
      userName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z0-9]*$")]),
      pid:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
      name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      regularSalary:new FormControl("",[Validators.required,Validators.pattern("^[0-9.]*$")]),
      partTimeSalary:new FormControl("",[Validators.required,Validators.pattern("^[0-9.]*$")]),
      annualSalary:new FormControl("",[Validators.required,Validators.pattern("^[0-9.]*$")])
    });
  }
  ngOnInit(): void {
  }
  createPayRoll() {
    this.service.createPayRoll(this.datman).subscribe(data => { this.message = data; });
    this.datman = new PayRoll("","","","","","");
  }
  back(): void {
    this.location.back()
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
