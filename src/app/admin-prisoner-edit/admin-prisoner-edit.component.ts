import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-prisoner-edit',
  templateUrl: './admin-prisoner-edit.component.html',
  styleUrls: ['./admin-prisoner-edit.component.css']
})
export class AdminPrisonerEditComponent implements OnInit {

  pr: Prisoner = new Prisoner("","","","","","","","","","","","","","","","","","","","","");
  un:string="";
  msg: string = "";
  myform: FormGroup;

  constructor(private service: PrisonerService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) {
    this.myform = new FormGroup({
      pid: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(20), Validators.pattern("^[0-9a-zA-Z ]*$")]),
      firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
      lastname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      middleName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      address: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z 0-9]*$")]),
      dateOfArrest: new FormControl("", [Validators.required]),
      caseId: new FormControl("", [Validators.required, Validators.pattern("^[0-9A-Za-z]*$")]),
      crimeType: new FormControl("", [Validators.required]),
      eyeWitness: new FormControl("", [Validators.required]),
      witnessAddress: new FormControl("", [Validators.required]),
      complaintCount: new FormControl("", [Validators.required]),
      eyeColor: new FormControl("", [Validators.required]),
      hairColor: new FormControl("", [Validators.required]),
      faceShape: new FormControl("", [Validators.required]),
      remandDate: new FormControl("", [Validators.required]),
      releaseDate: new FormControl("", [Validators.required]),
      courtHearing: new FormControl("", [Validators.required]),
      cellNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9A-Za-z]*$")])

    });
   }

  ngOnInit(): void {
    this.pr = new Prisoner("","","","","","","","","","","","","","","","","","","","","");
    this.un = this.activeRouter.snapshot.params['id'];
    this.service.getOnePrisoner(this.un).subscribe(data => { this.pr = data; });
  }
  updatePrisoner() {
    this.service.updatePrisoner(this.pr).subscribe(data => {
      console.log(data), this.router.navigate(['/prison-all']);
    });

  }
  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
