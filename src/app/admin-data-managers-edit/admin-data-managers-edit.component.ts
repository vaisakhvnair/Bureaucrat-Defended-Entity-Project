import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-admin-data-managers-edit',
  templateUrl: './admin-data-managers-edit.component.html',
  styleUrls: ['./admin-data-managers-edit.component.css']
})
export class AdminDataManagersEditComponent implements OnInit {

  datman: DataManager = new DataManager("","","","","","","","");
  un:string="";
  myform: FormGroup;

  constructor(private service: DataManagerService, private activeRouter: ActivatedRoute, private router: Router) { 
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
    this.datman = new DataManager("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['id'];
    this.service.getOneDataManager(this.un).subscribe(data => { this.datman = data; });
  }
  updateDataManager() {
    this.service.updateDataManager(this.datman).subscribe(data => {
      console.log(data), this.router.navigate(['/d-all']);
    });
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }

}
