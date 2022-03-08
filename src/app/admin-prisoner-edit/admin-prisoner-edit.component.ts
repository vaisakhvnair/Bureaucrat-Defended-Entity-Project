import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-prisoner-edit',
  templateUrl: './admin-prisoner-edit.component.html',
  styleUrls: ['./admin-prisoner-edit.component.css']
})
export class AdminPrisonerEditComponent implements OnInit {

  pr: Prisoner = new Prisoner("","","","","","",0,"","","","","",0,"","","","","","");
  un:string="";

  constructor(private service: PrisonerService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.pr = new Prisoner("","","","","","",0,"","","","","",0,"","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePrisoner(this.un).subscribe(data => { this.pr = data; });
  }
  updatePrisoner() {
    this.service.updatePrisoner(this.pr).subscribe(data => {
      console.log(data), this.router.navigate(['/prison-all']);
    });

  }
  back(): void {
    this.location.back();
  }
}
