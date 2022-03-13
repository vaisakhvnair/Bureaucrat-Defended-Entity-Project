import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Location } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-in-out-edit',
  templateUrl: './admin-in-out-edit.component.html',
  styleUrls: ['./admin-in-out-edit.component.css']
})
export class AdminInOutEditComponent implements OnInit {

  inout: InOut = new InOut("","","","","","","","");
  un:string="";
  myform:FormGroup;

  constructor(private service: InOutService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) { 
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
    this.inout = new InOut("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['id'];
    this.service.getOneInOut(this.un).subscribe(data => { this.inout = data; });
  }
  updateInOut() {
    this.service.updateInOut(this.inout).subscribe(data => {
      console.log(data), this.router.navigate(['/inout-all']);
    });

  }
  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }



}
