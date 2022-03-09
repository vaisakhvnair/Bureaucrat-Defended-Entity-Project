import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayRoll } from '../pay-roll';
import { Police } from '../police';
import { PoliceService } from '../police.service';
import { ReturnPolicePayV1 } from '../return-police-pay-v1';
import { ReturnPolicePayv0 } from '../return-police-payv0';

@Component({
  selector: 'app-admin-police-pay-all',
  templateUrl: './admin-police-pay-all.component.html',
  styleUrls: ['./admin-police-pay-all.component.css']
})
export class AdminPolicePayAllComponent implements OnInit {
  pol: Police = new Police("", "", "", "", "", "", "", "");
  pay: PayRoll = new PayRoll("", "", "", "", "", "");
 rpp1: ReturnPolicePayv0[]=[];

  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.grtTwo();
  }
  grtTwo(){
    this.service.getAllPolicePay().subscribe(data => { this.rpp1 = data }, error => { this.rpp1 = [] })
    
  }

}