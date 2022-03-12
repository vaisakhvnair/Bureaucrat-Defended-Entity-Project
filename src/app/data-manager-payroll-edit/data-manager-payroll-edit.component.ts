import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-data-manager-payroll-edit',
  templateUrl: './data-manager-payroll-edit.component.html',
  styleUrls: ['./data-manager-payroll-edit.component.css']
})
export class DataManagerPayrollEditComponent implements OnInit {

  pay: PayRoll = new PayRoll("","","","","","");
  un:string="";
  ms:string="";
  myform:FormGroup;
 
   constructor(private service: PayRollService, private router: Router,private activeRouter:ActivatedRoute) { 
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
    this.pay = new PayRoll("","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePayRoll(this.un).subscribe(data => { this.pay = data; });
  }
  updateDataManager() {
    if(this.myform.valid){
    this.service.updatePayRoll(this.pay).subscribe(data => {
      console.log(data), 
      this.router.navigate(['/dm-pay-all']);
    });
  }
  }
  
}
