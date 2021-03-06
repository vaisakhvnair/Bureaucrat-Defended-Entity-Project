import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-automated-release-register',
  templateUrl: './admin-automated-release-register.component.html',
  styleUrls: ['./admin-automated-release-register.component.css'],
  providers: [DatePipe]
})
export class AdminAutomatedReleaseRegisterComponent implements OnInit {

  pris:Prisoner[]=[];
  currentDate:any;
  b: boolean = false;
  todaydate:string="";
//c:string|null="";
  constructor(private service: PrisonerService, private router: Router,private location: Location,private datePipe: DatePipe) { 
   this.currentDate=this.myFunction();
   this.todaydate=this.currentDate;
   console.log(this.currentDate)
   this.service.getAllPrisoner().subscribe(data => { this.pris = data 
    
   }, 
     error => { this.pris = [] });
  
   var count=0;
   for(var i=0;i<this.pris.length;i++){
  
    if(this.pris[i].releaseDate==this.todaydate){
     //console.log(this.pris[i].releaseDate);
      count++;
    }
  }
  if(count==1){
    this.b=true;
  }else{
     this.b=false;
  }
     
   
    
  }

  date = new Date();
  myFunction(){
    this.date=new Date();
    let latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
    return latest_date;
   }

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
