import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayRoll } from '../pay-roll';
import { Police } from '../police';
import { PoliceService } from '../police.service';
import { ReturnPolicePayV1 } from '../return-police-pay-v1';

@Component({
  selector: 'app-admin-police-pay-search-each',
  templateUrl: './admin-police-pay-search-each.component.html',
  styleUrls: ['./admin-police-pay-search-each.component.css']
})
export class AdminPolicePaySearchEachComponent implements OnInit {


  rpp: ReturnPolicePayV1=new ReturnPolicePayV1(
    new Police("", "", "", "", "", "", "", ""),new PayRoll("", "", "", "", "", "")
  )

  un: string = "";
  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  grtOne() {
    this.service.getOnePolicePay(this.un).subscribe(data => { this.rpp = data })
  }

}
