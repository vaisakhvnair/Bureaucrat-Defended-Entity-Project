import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';
import { Message } from '../message';

@Component({
  selector: 'app-data-manager-duty-register-create',
  templateUrl: './data-manager-duty-register-create.component.html',
  styleUrls: ['./data-manager-duty-register-create.component.css']
})
export class DataManagerDutyRegisterCreateComponent implements OnInit {

  datman: DutyRegister = new DutyRegister("","","","","","");
  message: Message = new Message("","");
  myform: FormGroup;

  constructor(private service: DutyRegisterService, private router: Router) { this.myform = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9]*$")]),
    date: new FormControl("", [Validators.required]),
    timeOnDuty: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    dutyPoint: new FormControl("", [Validators.required]),
    timeOffDuty: new FormControl("", [Validators.required])
  });
}
ngOnInit(): void {
}
createDutyRegister() {
  this.service.createDutyRegister(this.datman).subscribe(data => { this.message = data; });
  this.datman = new DutyRegister("", "", "", "", "", "");
}
  
  
}
