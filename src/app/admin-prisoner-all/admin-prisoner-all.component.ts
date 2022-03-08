import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';
import { Message } from '../message';
@Component({
  selector: 'app-admin-prisoner-all',
  templateUrl: './admin-prisoner-all.component.html',
  styleUrls: ['./admin-prisoner-all.component.css']
})
export class AdminPrisonerAllComponent implements OnInit {



  pris: Prisoner[] = [];
  message: Message = new Message("","");
  constructor(private service: PrisonerService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllPrisoner();

  }
  getAllPrisoner() {
    this.service.getAllPrisoner().subscribe(data => { this.pris = data }, error => { this.pris = [] });
  }
  deletePrisoner(id: any) {
    this.service.deleteOnePrisoner(id).subscribe(data => { this.message = data, this.getAllPrisoner(); },
      error => { console.log(error) });
  }
  editPrisoner(id: any) {
    this.router.navigate(['prison-edit', id]);
  }
  back(): void {
    this.location.back()
  }

}
