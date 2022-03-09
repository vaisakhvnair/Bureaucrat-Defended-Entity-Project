import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-case-register',
  templateUrl: './admin-case-register.component.html',
  styleUrls: ['./admin-case-register.component.css']
})
export class AdminCaseRegisterComponent implements OnInit {

  pris: Prisoner[] = [];
  message: Message = new Message("","");
  constructor(private service: PrisonerService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllPrisoner();

  }
  getAllPrisoner() {
    this.service.getAllPrisoner().subscribe(data => { this.pris = data }, error => { this.pris = [] });
  }
  back(): void {
    this.location.back()
  }

}
