import { Component, OnInit } from '@angular/core';
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

  constructor(private service: PayRollService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pay = new PayRoll("","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePayRoll(this.un).subscribe(data => { this.pay = data; });
  }
  updateDataManager() {
    this.service.updatePayRoll(this.pay).subscribe(data => {
      console.log(data), this.router.navigate(['/dm-pay-all']);
    });
  }
}
