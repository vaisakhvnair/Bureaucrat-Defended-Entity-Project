import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayRoll } from '../pay-roll';
import { Police } from '../police';
import { PoliceService } from '../police.service';
import { ReturnPolicePayV1 } from '../return-police-pay-v1';

@Component({
  selector: 'app-admin-police-pay-all',
  templateUrl: './admin-police-pay-all.component.html',
  styleUrls: ['./admin-police-pay-all.component.css']
})
export class AdminPolicePayAllComponent implements OnInit {
  pol: Police = new Police("", "", "", "", "", "", "", "");
  pay: PayRoll = new PayRoll("", "", "", "", "", "")
  rpp: ReturnPolicePayV1=new ReturnPolicePayV1(
    new Police("", "", "", "", "", "", "", ""),new PayRoll("", "", "", "", "", "")
  )
 //rpp: ReturnPolicePayV1[]=[];

  un: string = "";
  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   // this.un = this.activeRouter.snapshot.params['un'];
  }
  grtOne() {
    this.service.getOnePolicePay(this.un).subscribe(data => { this.rpp = data })
  }


}