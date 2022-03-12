import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-police-prisoner-search',
  templateUrl: './police-prisoner-search.component.html',
  styleUrls: ['./police-prisoner-search.component.css']
})
export class PolicePrisonerSearchComponent implements OnInit {
  prisoner:Prisoner[]=[];
  prison:Prisoner[]=[];
  str1:string="";
  search="";
  constructor(private service:PrisonerService ,private router:Router) { }
  ngOnInit(): void {
  }
  
  searchPrisonerDetails(){
    this.service.getAllPrisoner().subscribe(data=>{
    this.prisoner=data;
    this.prison=this.prisoner.filter((p)=>{
      if(this.search=="pid"){
        return p.pid.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="firstName"){
        return p.firstName.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      
      if(this.search=="gender"){
        return p.gender.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="age"){
        return p.age.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      
      
      
      
      return 0;
    }
    )
    })
  
  }

}
