import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';
import { Message } from '../message';

@Component({
  selector: 'app-admin-duty-register-all',
  templateUrl: './admin-duty-register-all.component.html',
  styleUrls: ['./admin-duty-register-all.component.css']
})
export class AdminDutyRegisterAllComponent implements OnInit {

 

  datman: DutyRegister[] = [];
  dat: DutyRegister[] = [];
  message: Message = new Message("","");
  sortColumn = "";
  order=1;
  constructor(private service: DutyRegisterService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDutyRegister();
    this.dat=this.datman;

  }
  getAllDutyRegister() {
    this.service.getAllDutyRegister().subscribe(data => { this.datman = data }, error => { this.datman = [] });
  }
  deleteDutyRegister(id: any) {
    this.service.deleteOneDutyRegister(id).subscribe(data => { this.message = data, this.getAllDutyRegister(); },
      error => { console.log(error) });
  }
  editDutyRegister(id: any) {
    this.router.navigate(['duty-edit', id]);
  }

 
  onSortClickUn(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["userName"].charCodeAt(0) - e2["userName"].charCodeAt(0)) * this.order;});
  }
  onSortClickDt(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["date"].charCodeAt(0) - e2["date"].charCodeAt(0)) * this.order;});
  }
  onSortClickTd(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["timeOnDuty"].charCodeAt(0) - e2["timeOnDuty"].charCodeAt(0)) * this.order;});
  }
  onSortClickNm(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["name"].charCodeAt(0) - e2["name"].charCodeAt(0)) * this.order;});
  }
  onSortClickDp(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["dutyPoint"].charCodeAt(0) - e2["dutyPoint"].charCodeAt(0)) * this.order;});
  }
  onSortClickTod(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["timeOffDuty"].charCodeAt(0) - e2["timeOffDuty"].charCodeAt(0)) * this.order;});
  }

}
