import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-cell-details',
  templateUrl: './admin-cell-details.component.html',
  styleUrls: ['./admin-cell-details.component.css']
})
export class AdminCellDetailsComponent implements OnInit {


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
  backtoadmin(){
    this.router.navigate(['/admin'])
  }


}
