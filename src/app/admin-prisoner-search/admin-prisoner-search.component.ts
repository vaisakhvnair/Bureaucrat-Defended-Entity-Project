import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-prisoner-search',
  templateUrl: './admin-prisoner-search.component.html',
  styleUrls: ['./admin-prisoner-search.component.css']
})
export class AdminPrisonerSearchComponent implements OnInit {


  constructor(private service: PrisonerService, private router: Router, private location: Location) { }

  police: Prisoner[] = [];
  pol: Prisoner[] = [];
  strUn: string = "";
  strId: string = "";
  strNm: string = "";
  strDe: string = "";
  strAg: string = "";
  strCt: string = "";
  strCi: string = "";
  strCn: string = "";

  ngOnInit(): void {
    this.service.getAllPrisoner().subscribe(data => {
      this.police = data;
      this.pol = this.police
    });
  }
  search() {
    this.police = this.pol.filter((e1) => {
      if (e1.pid.toLowerCase().indexOf(this.strUn.toLowerCase()) >= 0)
        return e1.pid.toLowerCase().indexOf(this.strUn.toLowerCase()) >= 0

      else if (e1.firstName.toLowerCase().indexOf(this.strId.toLowerCase()) >= 0)
        return e1.firstName.toLowerCase().indexOf(this.strId.toLowerCase()) >= 0

      else if (e1.gender.toLowerCase().indexOf(this.strDe.toLowerCase()) >= 0)
        return e1.gender.toLowerCase().indexOf(this.strDe.toLowerCase()) >= 0

      else if (e1.age.toLowerCase().indexOf(this.strAg.toLowerCase()) >= 0)
        return e1.age.toLowerCase().indexOf(this.strAg.toLowerCase()) >= 0

      else if (e1.crimeType.toLowerCase().indexOf(this.strCt.toLowerCase()) >= 0)
        return e1.crimeType.toLowerCase().indexOf(this.strCt.toLowerCase()) >= 0

      else if (e1.cellNumber.toLowerCase().indexOf(this.strCn.toLowerCase()) >= 0)
        return e1.cellNumber.toLowerCase().indexOf(this.strCn.toLowerCase()) >= 0
      else
        return e1.caseId.toLowerCase().indexOf(this.strCi.toLowerCase()) >= 0
    })
  }
  back(): void {
    this.location.back();
  }
  backtoadmin() {
    this.router.navigate(['/admin'])
  }
}
