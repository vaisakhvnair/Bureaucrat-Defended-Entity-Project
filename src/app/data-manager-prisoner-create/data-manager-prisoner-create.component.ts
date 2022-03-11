import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-data-manager-prisoner-create',
  templateUrl: './data-manager-prisoner-create.component.html',
  styleUrls: ['./data-manager-prisoner-create.component.css']
})
export class DataManagerPrisonerCreateComponent implements OnInit {

  constructor(private service:PrisonerService,private router:Router,private location: Location) { }
prisoner:Prisoner=new Prisoner("","","","","","","","","","","","","","","","","","","","","");

message:Message=new Message("","");
  ngOnInit(): void {
  }
  addPrisoner(){ 
    this.service.createPrisoner(this.prisoner).subscribe(data=>{      
       this.message=data; 
    }); 
    this.prisoner=new Prisoner("","","","","","","","","","","","","","","","","","","","","");
}
back(): void {
  this.location.back();
}
backtoadmin(){
  this.router.navigate(['/manager'])
}

}
