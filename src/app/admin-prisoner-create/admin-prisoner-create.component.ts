import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-admin-prisoner-create',
  templateUrl: './admin-prisoner-create.component.html',
  styleUrls: ['./admin-prisoner-create.component.css']
})
export class AdminPrisonerCreateComponent implements OnInit {


  pr: Prisoner = new Prisoner("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  message: Message = new Message("", "");
  msg: string = "";
  myform: FormGroup;

  constructor(private service: PrisonerService, private router: Router, private location: Location) {
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
  }
  createPrisoner() {
    this.service.createPrisoner(this.pr).subscribe(data => { this.message = data; });
    this.pr = new Prisoner("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  }
  back(): void {
    this.location.back();
  }
  backtoadmin() {
    this.router.navigate(['/admin'])
  }
}
