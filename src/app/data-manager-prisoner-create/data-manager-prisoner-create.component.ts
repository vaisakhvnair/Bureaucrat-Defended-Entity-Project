import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
ms:string="";
myForm:FormGroup;
  constructor(private service:PrisonerService,private router:Router) {
    this.myForm=new FormGroup({
      pid:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
      firstName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      laststName:new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      middleName:new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      gender:new FormControl("",[Validators.required]),
     age:new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
     address:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern("^[a-zA-Z ]*$")]),
     dateOfArrest:new FormControl("",[Validators.required]),
     crimeType:new FormControl("",[Validators.required]),
     remandDate:new FormControl("",[Validators.required]),
     complaintCount:new FormControl("",[Validators.required]),
     cellNumber:new FormControl("",[Validators.required]),
     eyeWitness:new FormControl("",[Validators.required]),
     witnessAddress:new FormControl("",[Validators.required]),
     eyeColor:new FormControl("",[Validators.required]),
     hairColor:new FormControl("",[Validators.required]),
     faceShape:new FormControl("",[Validators.required])

    })
   }
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


}
