import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import { PayRoll } from '../pay-roll';
import { ReturnDataManagerPayV1 } from '../return-data-manager-pay-v1';

@Component({
  selector: 'app-admin-data-manager-pay-search-each',
  templateUrl: './admin-data-manager-pay-search-each.component.html',
  styleUrls: ['./admin-data-manager-pay-search-each.component.css']
})
export class AdminDataManagerPaySearchEachComponent implements OnInit {


  rpp: ReturnDataManagerPayV1=new ReturnDataManagerPayV1(
    new DataManager("", "", "", "", "", "", "", ""),new PayRoll("", "", "", "", "", "")
  )

  un: string = "";
  constructor(private service: DataManagerService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  grtOne() {
    this.service.getOnePolicePay(this.un).subscribe(data => { this.rpp = data })
  }


}
