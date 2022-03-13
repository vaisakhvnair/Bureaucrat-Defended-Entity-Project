import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-admin-police-create',
  templateUrl: './admin-police-create.component.html',
  styleUrls: ['./admin-police-create.component.css']
})
export class AdminPoliceCreateComponent implements OnInit {

  police: Police = new Police("", "", "", "", "", "", "", "");
  message: Message = new Message("", "");
  myform: FormGroup;

  constructor(private service: PoliceService, private router: Router) {
    this.myform = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^POL[a-zA-Z0-9]*$")]),
      password: new FormControl("", [Validators.required]),
      id: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]),
      name: new FormControl("", [Validators.required, Validators.pattern("^[A-za-z ]*$")]),
      designation: new FormControl("", [Validators.required]),
      hiredate: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required])
    });
  }
  ngOnInit(): void {
  }
  createPolice() {
    this.service.createPolice(this.police).subscribe(data => { this.message = data; });
    this.police = new Police("", "", "", "", "", "", "", "");
  }
  backtoadmin() {
    this.router.navigate(['/admin'])
  }

}
