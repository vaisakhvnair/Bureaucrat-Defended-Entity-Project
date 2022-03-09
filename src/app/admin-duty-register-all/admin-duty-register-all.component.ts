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
  message: Message = new Message("","");
  constructor(private service: DutyRegisterService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDutyRegister();

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
}
