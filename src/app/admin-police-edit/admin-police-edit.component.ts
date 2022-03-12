import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-admin-police-edit',
  templateUrl: './admin-police-edit.component.html',
  styleUrls: ['./admin-police-edit.component.css']
})
export class AdminPoliceEditComponent implements OnInit {

  police: Police = new Police("","","","","","","","");
  un:string="";
  myform: FormGroup;

  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) {
    this.myform = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9]*$")]),
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
    this.police = new Police("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePolice(this.un).subscribe(data => { this.police = data; });
  }
  updatePolice() {
    this.service.updatePolice(this.police).subscribe(data => {
      console.log(data), this.router.navigate(['/p-all']);
    });
  }

  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
