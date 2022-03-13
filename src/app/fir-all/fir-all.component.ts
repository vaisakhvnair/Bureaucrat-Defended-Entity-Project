import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FIR } from '../fir';
import { FIRService } from '../fir.service';
import { Message } from '../message';

@Component({
  selector: 'app-fir-all',
  templateUrl: './fir-all.component.html',
  styleUrls: ['./fir-all.component.css']
})
export class FIRAllComponent implements OnInit {

  fir: FIR[] = [];
  firc: FIR = new FIR("","","","","","","","");
  fire: FIR = new FIR("","","","","","","","");
  un:string="";
  message: Message = new Message("","");
  myform:FormGroup;
  constructor(private service: FIRService, private router: Router, private activeRouter: ActivatedRoute,private location: Location) {
    this.myform=new FormGroup({
      complaintNumber:new FormControl("",[Validators.required, Validators.pattern("^C[0-9]*$")]),
      victimName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      offence:new FormControl("",[Validators.required]),
      timeOfCrime:new FormControl("",[Validators.required]),
      dateOfCrime:new FormControl("",[Validators.required]),
      placeOfCrime:new FormControl("",[Validators.required]),
      witnessStatement:new FormControl("",[Validators.required]),
      culpritName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      complaintNumber1:new FormControl("",[Validators.required, Validators.pattern("^C[0-9]*$")]),
      victimName1:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")]),
      offence1:new FormControl("",[Validators.required]),
      timeOfCrime1:new FormControl("",[Validators.required]),
      dateOfCrime1:new FormControl("",[Validators.required]),
      placeOfCrime1:new FormControl("",[Validators.required]),
      witnessStatement1:new FormControl("",[Validators.required]),
      culpritName1:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("^[a-zA-Z ]*$")])
    });
   }

  ngOnInit(): void {
    this.getAllFIR();
    this.fire = new FIR("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['id'];
    this.service.getOneFIR(this.un).subscribe(data => { this.fire = data; });

  }
  getAllFIR() {
    this.service.getAllFIR().subscribe(data => { this.fir = data }, error => { this.fir = [] });
  }
  deleteFIR(id: any) {
    this.service.deleteOneFIR(id).subscribe(data => { this.message = data, this.getAllFIR(); },
      error => { console.log(error) });
  }
  editFIR(id: any) {
    this.router.navigate(['fir-all', id]);
  }
  createFIR() {
    this.service.createFIR(this.firc).subscribe(data => { this.message = data; });
    
  }
  updateFIR() {
    this.service.updateFIR(this.fire).subscribe(data => {
      console.log(data), this.router.navigate(['/fir-all']);
    });
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
  back(): void {
    this.location.back()
  }


}
