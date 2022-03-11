import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private service: PayRollService, private router: Router,private location: Location) { }
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
