import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import { PayRoll } from '../pay-roll';
import { ReturnDataManagerPayv0 } from '../return-data-manager-payv0';

@Component({
  selector: 'app-admin-data-manager-pay-all',
  templateUrl: './admin-data-manager-pay-all.component.html',
  styleUrls: ['./admin-data-manager-pay-all.component.css']
})
export class AdminDataManagerPayAllComponent implements OnInit {

  pol: DataManager = new DataManager("", "", "", "", "", "", "", "");
  pay: PayRoll = new PayRoll("", "", "", "", "", "");
 rpp1: ReturnDataManagerPayv0[]=[];

  constructor(private service: DataManagerService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   this.grtTwo();
  }
  grtTwo(){
    this.service.getAllPolicePay().subscribe(data => { this.rpp1 = data }, error => { this.rpp1 = [] })
    
  }


}
