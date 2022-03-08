import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Message } from '../message';
import { Location } from '@angular/common'

@Component({
  selector: 'app-admin-in-out-create',
  templateUrl: './admin-in-out-create.component.html',
  styleUrls: ['./admin-in-out-create.component.css']
})
export class AdminInOutCreateComponent implements OnInit {

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
}
