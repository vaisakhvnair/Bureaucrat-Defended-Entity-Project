import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../message';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-data-manager-payroll-create',
  templateUrl: './data-manager-payroll-create.component.html',
  styleUrls: ['./data-manager-payroll-create.component.css']
})
export class DataManagerPayrollCreateComponent implements OnInit {

  pay: PayRoll = new PayRoll("","","","","","");
  message: Message = new Message("","");
 ms:string="";
 myform:FormGroup;

  constructor(private service: PayRollService, private router: Router) { 
this.myform=new FormGroup({
  userName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),
    Validators.pattern("^[a-zA-Z ]*$")]),
  pid:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
  name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),
    Validators.pattern("^[a-zA-Z ]*$")]),
  regularSalary:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
  partTimeSalary:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
  annualSalary:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")])
});
}
  ngOnInit(): void {
  }
  createPayRoll() {
    if(this.myform.valid){

    this.service.createPayRoll(this.pay).subscribe(data =>
       { this.message = data; });
    }
    this.pay = new PayRoll("","","","","","");
  

  }
  
}
