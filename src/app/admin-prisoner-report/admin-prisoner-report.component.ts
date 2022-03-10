import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-prisoner-report',
  templateUrl: './admin-prisoner-report.component.html',
  styleUrls: ['./admin-prisoner-report.component.css']
})
export class AdminPrisonerReportComponent implements OnInit {

  p: Prisoner = new Prisoner("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")

  un: string = "";
  constructor(private service: PrisonerService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  grtOne() {
    this.service.getOnePrisoner(this.un).subscribe(data => { this.p = data })
  }


}
