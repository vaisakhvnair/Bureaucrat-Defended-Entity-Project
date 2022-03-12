import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Message } from '../message';

@Component({
  selector: 'app-data-manager-in-out-add',
  templateUrl: './data-manager-in-out-add.component.html',
  styleUrls: ['./data-manager-in-out-add.component.css']
})
export class DataManagerInOutAddComponent implements OnInit {
  inout: InOut = new InOut("","","","","","","","");
  message: Message = new Message("","");

  constructor(private service: InOutService, private router: Router,private location: Location) { }
  ngOnInit(): void {
  }
  createInOut() {
    this.service.createInOut(this.inout).subscribe(data => { this.message = data; });

  }
  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/manager'])
  }
}
