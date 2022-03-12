import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';

@Component({
  selector: 'app-data-manager-duty-register-edit',
  templateUrl: './data-manager-duty-register-edit.component.html',
  styleUrls: ['./data-manager-duty-register-edit.component.css']
})
export class DataManagerDutyRegisterEditComponent implements OnInit {

  datman: DutyRegister = new DutyRegister("","","","","","");
  un:string="";
  ms:string="";
  myform:FormGroup;
  constructor(private service: DutyRegisterService, private activeRouter: ActivatedRoute, private router: Router) { 
    this.myform = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9]*$")]),
      date: new FormControl("", [Validators.required]),
      timeOnDuty: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
      dutyPoint: new FormControl("", [Validators.required]),
      timeOffDuty: new FormControl("", [Validators.required])
    });
   }

  ngOnInit(): void {
    this.datman = new DutyRegister("","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOneDutyRegister(this.un).subscribe(data => { this.datman = data; });
  }
  updateDutyReg() {
    this.service.updateDutyRegister(this.datman).subscribe(data => {
      console.log(data), this.router.navigate(['/dm-d-all']);
    });
  }
  }
  


