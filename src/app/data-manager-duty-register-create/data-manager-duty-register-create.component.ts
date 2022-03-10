import { Component, OnInit } from '@angular/core';
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

  duty: DutyRegister = new DutyRegister("","","","","","");
  message: Message = new Message("","");

  constructor(private service: DutyRegisterService, private router: Router) { }
  ngOnInit(): void {
  }
  createDutyRegister() {
    this.service.createDutyRegister(this.duty).subscribe(data => { this.message = data; });
    this.duty = new DutyRegister("","","","","","");
  }

}
