import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Message } from '../message';
import { Location } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-in-out-create',
  templateUrl: './admin-in-out-create.component.html',
  styleUrls: ['./admin-in-out-create.component.css']
})
export class AdminInOutCreateComponent implements OnInit {

  inout: InOut = new InOut("","","","","","","","");
  message: Message = new Message("","");
  myform:FormGroup;

  constructor(private service: InOutService, private router: Router,private location: Location) { 
    this.myform=new FormGroup({
      siNo:new FormControl("",[Validators.required, Validators.pattern("^[0-9]*$")]),
      date:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z]*$")]),
       dept:new FormControl("",[Validators.required,Validators.pattern("^[A-za-z ]*$")]),
       purpose:new FormControl("",[Validators.required]),
       timeIn:new FormControl("",[Validators.required]),
       timeOut:new FormControl("",[Validators.required]),
       dsignature:new FormControl("",[Validators.required])
    });
  }
  ngOnInit(): void {
  }
  createInOut() {
    this.service.createInOut(this.inout).subscribe(data => { this.message = data; });

  }
  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
