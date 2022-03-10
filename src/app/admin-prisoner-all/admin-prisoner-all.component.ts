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



  prisoner: Prisoner[] = [];
  pris:Prisoner[]=[];
  message: Message = new Message("","");
  sortColumn = "";
  order=1;
  constructor(private service: PrisonerService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllPrisoner();
    this.prisoner=this.pris;

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


  onSortClick() {
   

    this.prisoner = this.pris.sort((e1, e2) => {

      if (this.sortColumn == "pid") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "firstName") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "dateOfArrest") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "address") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "dateOfBirth") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "gender") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "age") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "caseId") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "crimeType") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "eyeWitness") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "complaintCount") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "remandDate") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "releaseDate") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "courtHearing") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "cellNumber") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "witnessAddress") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      return 0;
    });

  }

}
