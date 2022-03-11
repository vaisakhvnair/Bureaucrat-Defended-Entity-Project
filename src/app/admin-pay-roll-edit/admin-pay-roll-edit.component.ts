import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-admin-pay-roll-edit',
  templateUrl: './admin-pay-roll-edit.component.html',
  styleUrls: ['./admin-pay-roll-edit.component.css']
})
export class AdminPayRollEditComponent implements OnInit {


  datman: PayRoll = new PayRoll("","","","","","");
  un:string="";

  constructor(private service: PayRollService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.datman = new PayRoll("","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePayRoll(this.un).subscribe(data => { this.datman = data; });
  }
  updateDataManager() {
    this.service.updatePayRoll(this.datman).subscribe(data => {
      console.log(data), this.router.navigate(['/pay-all']);
    });
  }
  back(): void {
    this.location.back()
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
