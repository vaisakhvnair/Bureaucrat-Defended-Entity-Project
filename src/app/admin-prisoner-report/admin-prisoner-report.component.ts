import { Location } from '@angular/common';
import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pimg } from '../pimg';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';
@Component({
  selector: 'app-admin-prisoner-report',
  templateUrl: './admin-prisoner-report.component.html',
  styleUrls: ['./admin-prisoner-report.component.css']
})
export class AdminPrisonerReportComponent implements OnInit {



  p: Prisoner = new Prisoner("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
  pimg: Pimg[] = [];
  pi: Pimg[] = [];
  pic: string = "";
  lpic: string = "";
  rpic: string = "";
  bpic: string = "";
  un: string = "";
  constructor(private service: PrisonerService, private activeRouter: ActivatedRoute, private router: Router, private location: Location) {

  }

  ngOnInit(): void {
    this.service.getImg().subscribe(data => {
      this.pimg = data;
      this.pi = this.pimg;

    })
  }
  grtOne() {
    this.service.getOnePrisoner(this.un).subscribe(data => { this.p = data })
    this.getImage();
  }
  back(): void {
    this.location.back();
  }
  backtoadmin() {
    this.router.navigate(['/admin'])
  }
  getImage() {

    for (var i = 0; i < this.pi.length; i++)
      if (this.pi[i].pid == this.p.pid) {
        this.pic = this.pi[i].photoloc;
        this.lpic = this.pi[i].lphotoloc;
        this.rpic = this.pi[i].rphotoloc;
        this.bpic = this.pi[i].bphotoloc;
      }
    return this.pic;

  }

}
