import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-data-manager-payroll-all',
  templateUrl: './data-manager-payroll-all.component.html',
  styleUrls: ['./data-manager-payroll-all.component.css']
})
export class DataManagerPayrollAllComponent implements OnInit {

  pay: PayRoll[] = [];
  message: Message = new Message("","");
  constructor(private service: PayRollService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPayRoll();

  }
  getAllPayRoll() {
    this.service.getAllPayRoll().subscribe(data => { this.pay = data }, error => { this.pay = [] });
  }
  
  editPayRoll(id: any) {
    this.router.navigate(['dm-pay-edit', id]);
  }

}
