import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Message } from '../message';
import { Location } from '@angular/common'

@Component({
  selector: 'app-admin-in-out-all',
  templateUrl: './admin-in-out-all.component.html',
  styleUrls: ['./admin-in-out-all.component.css']
})
export class AdminInOutAllComponent implements OnInit {


  inout: InOut[] = [];
  message: Message = new Message("","");
  constructor(private service: InOutService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllInOut();

  }
  getAllInOut() {
    this.service.getAllInOut().subscribe(data => { this.inout = data }, error => { this.inout = [] });
  }
  deleteInOut(id: any) {
    this.service.deleteOneInOut(id).subscribe(data => { this.message = data, this.getAllInOut(); },
      error => { console.log(error) });
  }
  editInOut(id: any) {
    this.router.navigate(['inout-edit', id]);
  }
  back(): void {
    this.location.back()
  }


}
