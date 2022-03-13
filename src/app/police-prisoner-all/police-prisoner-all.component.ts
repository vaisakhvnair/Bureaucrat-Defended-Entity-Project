import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-police-prisoner-all',
  templateUrl: './police-prisoner-all.component.html',
  styleUrls: ['./police-prisoner-all.component.css']
})
export class PolicePrisonerAllComponent implements OnInit {
  prison:Prisoner[]=[];
  constructor(private service:PrisonerService,private router:Router) { }

  ngOnInit(): void {
    this.getAllDetails();
  }
  getAllDetails(){
    this.service.getAllPrisoner().subscribe(data=>{
      this.prison=data}
      ,error=>{
           this.prison=[]
      });
    }
  searchPrisonerDetails(){
    this.router.navigate(['police-search']);
  }


}


