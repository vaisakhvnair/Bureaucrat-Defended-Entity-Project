import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-report-all',
  templateUrl: './report-all.component.html',
  styleUrls: ['./report-all.component.css']
})
export class ReportAllComponent implements OnInit {

  
  pr: Prisoner = new Prisoner("","","","","","","","","","","","","","","","","","","","","");
  
  un:string="";

  constructor(private service:PrisonerService,private activeRouter:ActivatedRoute, private router:Router) { } 
 
  ngOnInit(): void {   
     } 
  searchPrisonerDetails(){
   //  this.pr = new Prisoner("","","","","","","","","","","","","","","","","","","","");
    //  this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePrisoner(this.un).subscribe(data => {
       this.pr = data; 
   //console.log(pr.firstName);
    });

  }

}
