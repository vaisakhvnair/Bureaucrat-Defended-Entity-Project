import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-data-manager-prisoner-all',
  templateUrl: './data-manager-prisoner-all.component.html',
  styleUrls: ['./data-manager-prisoner-all.component.css']
})
export class DataManagerPrisonerAllComponent implements OnInit {

  prisoner:Prisoner[]=[];
 
  message:Message=new Message("","");
  
  
  
    constructor(private service:PrisonerService, private router:Router) { }
  
    ngOnInit(): void {
      this.getAllDetails();
      
    }
    getAllDetails(){ 
      
      this.service.getAllPrisoner().subscribe(data=>{this.prisoner=data}
       
  ,       error=>{         
    this.prisoner=[] 
        });   } 
    
    editDetails(id:any){ 
      this.router.navigate(['dm-p-edit',id]);
    } 
    searchPrisonerData(){
      this.router.navigate(['dm-p-search']);
    }
    
}
