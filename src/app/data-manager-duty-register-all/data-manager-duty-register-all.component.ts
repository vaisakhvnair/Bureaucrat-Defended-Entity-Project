import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';
import { Message } from '../message';

@Component({
  selector: 'app-data-manager-duty-register-all',
  templateUrl: './data-manager-duty-register-all.component.html',
  styleUrls: ['./data-manager-duty-register-all.component.css']
})
export class DataManagerDutyRegisterAllComponent implements OnInit {

  duty: DutyRegister[] = [];
  message: Message = new Message("","");
  constructor(private service: DutyRegisterService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDutyRegister();

  }
  getAllDutyRegister() {
    this.service.getAllDutyRegister().subscribe(data => { this.duty = data }, error => { this.duty = [] });
  }
  
  editDutyRegister(id: any) {
    this.router.navigate(['dm-d-edit', id]);
  }
  
}
