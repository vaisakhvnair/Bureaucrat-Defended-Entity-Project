import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-data-manager-prisoner-edit',
  templateUrl: './data-manager-prisoner-edit.component.html',
  styleUrls: ['./data-manager-prisoner-edit.component.css']
})
export class DataManagerPrisonerEditComponent implements OnInit {

  prisoner:Prisoner=new Prisoner("","","","","","","","","","","","","","","","","","","","","");
pid:string="";
//ms:string="";
myForm:FormGroup;
  constructor(private service:PrisonerService,private activeRouter:ActivatedRoute,private router:Router) {
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

  ngOnInit(): void {
    this.prisoner =new Prisoner("","","","","","","","","","","","","","","","","","","","",""); 
    this.pid=this.activeRouter.snapshot.params['id'];    
     this.service.getOnePrisoner(this.pid).subscribe( data=>{ 
        this.prisoner=data; 
      } 
    );  
  }
  updateDetails(){ 
  
    this.service.updatePrisoner(this.prisoner).subscribe(data=>{      
       console.log(data) 
       this.router.navigate(['/dm-p-all']);
       
    });
    
  
    
  
}
}
