import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { Police } from '../police';
import { PoliceService } from '../police.service';
import { ReturnPoliceDutyv1 } from '../return-police-dutyv1';

@Component({
  selector: 'app-admin-police-duty-each',
  templateUrl: './admin-police-duty-each.component.html',
  styleUrls: ['./admin-police-duty-each.component.css']
})
export class AdminPoliceDutyEachComponent implements OnInit {

 

  rpp: ReturnPoliceDutyv1=new ReturnPoliceDutyv1(
    new Police("", "", "", "", "", "", "", ""),new DutyRegister("", "", "", "", "", "")
  )

  un: string = "";
  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  grtOne() {
    this.service.getOnePoliceDuty(this.un).subscribe(data => { this.rpp = data })
  }

}
