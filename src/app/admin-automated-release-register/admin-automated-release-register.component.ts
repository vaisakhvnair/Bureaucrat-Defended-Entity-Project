import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-automated-release-register',
  templateUrl: './admin-automated-release-register.component.html',
  styleUrls: ['./admin-automated-release-register.component.css']
})
export class AdminAutomatedReleaseRegisterComponent implements OnInit {

  pris:Prisoner[]=[];
  constructor(private service: PrisonerService, private router: Router,private location: Location) { 
    //if (this.marks >= 35) {
   //   this.b = true;
   // } else {
  //    this.b = false;
 //   }
  }

  ngOnInit(): void {
    this.getAllPrisoner();
  }

  getAllPrisoner() {
    this.service.getAllPrisoner().subscribe(data => { this.pris = data }, error => { this.pris = [] });
  }
}
