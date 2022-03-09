import { Component, OnInit } from '@angular/core';
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

  
  inout: InOut= new InOut("","","","","","","","");
  message: Message = new Message("","");

  constructor(private service: InOutService, private router: Router) { }
  ngOnInit(): void {
  }
  createInOut() {
    this.service.createInOut(this.inout).subscribe(data => { this.message = data; });

  }

}
