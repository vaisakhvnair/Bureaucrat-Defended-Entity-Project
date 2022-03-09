import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-admin-pay-roll-all',
  templateUrl: './admin-pay-roll-all.component.html',
  styleUrls: ['./admin-pay-roll-all.component.css']
})
export class AdminPayRollAllComponent implements OnInit {

  datman: PayRoll[] = [];
  message: Message = new Message("","");
  constructor(private service: PayRollService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPayRoll();

  }
  getAllPayRoll() {
    this.service.getAllPayRoll().subscribe(data => { this.datman = data }, error => { this.datman = [] });
  }
  deletePayRoll(id: any) {
    this.service.deleteOnePayRoll(id).subscribe(data => { this.message = data, this.getAllPayRoll(); },
      error => { console.log(error) });
  }
  editPayRoll(id: any) {
    this.router.navigate(['pay-edit', id]);
  }


}
