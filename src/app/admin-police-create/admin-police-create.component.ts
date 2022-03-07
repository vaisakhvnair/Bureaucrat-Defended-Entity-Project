import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-admin-police-create',
  templateUrl: './admin-police-create.component.html',
  styleUrls: ['./admin-police-create.component.css']
})
export class AdminPoliceCreateComponent implements OnInit {

  police: Police = new Police("","","","","");
  message: Message = new Message("","");

  constructor(private service: PoliceService, private router: Router) { }
  ngOnInit(): void {
  }
  createPolice() {
    this.service.createPolice(this.police).subscribe(data => { this.message = data; });
    //this.police = new Police("","","","","");
  }


}
