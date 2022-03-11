import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-data-manager-prisoner-search',
  templateUrl: './data-manager-prisoner-search.component.html',
  styleUrls: ['./data-manager-prisoner-search.component.css']
})
export class DataManagerPrisonerSearchComponent implements OnInit {

  prisoner:Prisoner[]=[];
  prison:Prisoner[]=[];
str1:string="";
search="";
  constructor(private service:PrisonerService, private router:Router,private location:Location) { }

  ngOnInit(): void {
  }
  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/manager'])
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
      if(this.search=="lastName"){
        return p.lastName.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="middleName"){
        return p.middleName.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="dateOfBirth"){
        return p.dateOfBirth.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="gender"){
        return p.gender.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="age"){
        return p.age.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="dateOfArrest"){
        return p.dateOfArrest.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="crimeType"){
        return p.crimeType.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="complaintCount"){
        return p.complaintCount.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="eyeColor"){
        return p.eyeColor.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="hairColor"){
        return p.hairColor.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="faceShape"){
        return p.faceShape.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="remandDate"){
        return p.remandDate.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="releaseDate"){
        return p.releaseDate.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      if(this.search=="courtHearing"){
        return p.courtHearing.toLowerCase().indexOf(this.str1.toLocaleLowerCase())>=0;
      }
      
      return 0;
    }
    )
    })
      }
}
