import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import { Message } from '../message';

@Component({
  selector: 'app-admin-data-managers-create',
  templateUrl: './admin-data-managers-create.component.html',
  styleUrls: ['./admin-data-managers-create.component.css']
})
export class AdminDataManagersCreateComponent implements OnInit {

  datman: DataManager = new DataManager("","","","","","","","");
  message: Message = new Message("","");
  myform: FormGroup;

  constructor(private service: DataManagerService, private router: Router) { 
    this.myform = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^DAT[a-zA-Z0-9]*$")]),
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
  createDataManager() {
    this.service.createDataManager(this.datman).subscribe(data => { this.message = data; });
    this.datman = new DataManager("","","","","","","","");
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }

}
