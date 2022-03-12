import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';

@Component({
  selector: 'app-data-manager-in-out-edit',
  templateUrl: './data-manager-in-out-edit.component.html',
  styleUrls: ['./data-manager-in-out-edit.component.css']
})
export class DataManagerInOutEditComponent implements OnInit {

  inout: InOut = new InOut("","","","","","","","");
  un:string="";
  myform:FormGroup;
  constructor(private service: InOutService, private activeRouter: ActivatedRoute, private router: Router) {this.myform=new FormGroup({
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
  this.un = this.activeRouter.snapshot.params['un'];
  this.service.getOneInOut(this.un).subscribe(data => { this.inout = data; });
}
updateInOut() {
  this.service.updateInOut(this.inout).subscribe(data => {
    console.log(data), this.router.navigate(['/dm-io-all']);
  });

}
}
