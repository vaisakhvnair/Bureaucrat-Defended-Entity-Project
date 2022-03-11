import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import { DutyRegister } from '../duty-register';
import { ReturnDataManagerDutyv1 } from '../return-data-manager-dutyv1';

@Component({
  selector: 'app-admin-data-manager-duty-each',
  templateUrl: './admin-data-manager-duty-each.component.html',
  styleUrls: ['./admin-data-manager-duty-each.component.css']
})
export class AdminDataManagerDutyEachComponent implements OnInit {

  rpp: ReturnDataManagerDutyv1=new ReturnDataManagerDutyv1(
    new DataManager("", "", "", "", "", "", "", ""),new DutyRegister("", "", "", "", "", "")
  )

  un: string = "";
  constructor(private service: DataManagerService, private activeRouter: ActivatedRoute, private router: Router,private location:Location) { }

  ngOnInit(): void {
  }
  grtOne() {
    this.service.getOnePoliceDuty(this.un).subscribe(data => { this.rpp = data })
  }
  back(): void {
    this.location.back()
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }


}
