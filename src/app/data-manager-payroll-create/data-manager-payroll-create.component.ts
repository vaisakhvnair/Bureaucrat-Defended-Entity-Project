import { Component, OnInit } from '@angular/core';
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

  constructor(private service: PayRollService, private router: Router) { }
  ngOnInit(): void {
  }
  createPayRoll() {
    this.service.createPayRoll(this.pay).subscribe(data => { this.message = data; });
    this.pay = new PayRoll("","","","","","");
  }


}
