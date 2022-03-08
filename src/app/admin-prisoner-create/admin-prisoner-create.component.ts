import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-prisoner-create',
  templateUrl: './admin-prisoner-create.component.html',
  styleUrls: ['./admin-prisoner-create.component.css']
})
export class AdminPrisonerCreateComponent implements OnInit {


  pr:Prisoner = new Prisoner("","","","","","","","","","","","","","","","","","","");
  message: Message = new Message("","");

  constructor(private service:PrisonerService , private router: Router,private location: Location) { }
  ngOnInit(): void {
  }
  createPrisoner() {
    this.service.createPrisoner(this.pr).subscribe(data => { this.message = data; });
    this.pr=new Prisoner("","","","","","","","","","","","","","","","","","","");
  }
  back(): void {
    this.location.back();
  }

}
