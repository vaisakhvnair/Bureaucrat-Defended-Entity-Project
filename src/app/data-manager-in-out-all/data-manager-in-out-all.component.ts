import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Message } from '../message';

@Component({
  selector: 'app-data-manager-in-out-all',
  templateUrl: './data-manager-in-out-all.component.html',
  styleUrls: ['./data-manager-in-out-all.component.css']
})
export class DataManagerInOutAllComponent implements OnInit {

  inout: InOut[] = [];
  message: Message = new Message("","");
  constructor(private service: InOutService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllInOut();

  }
  getAllInOut() {
    this.service.getAllInOut().subscribe(data => { this.inout = data }, error => { this.inout = [] });
  }
 
  editInOut(id: any) {
    this.router.navigate(['inout-edit', id]);
  }
}
