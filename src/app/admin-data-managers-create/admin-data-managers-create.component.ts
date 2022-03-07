import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import { Message } from '../message';

@Component({
  selector: 'app-admin-data-managers-create',
  templateUrl: './admin-data-managers-create.component.html',
  styleUrls: ['./admin-data-managers-create.component.css']
})
export class AdminDataManagersCreateComponent implements OnInit {

  datman: DataManager = new DataManager("","","","","");
  message: Message = new Message("","");

  constructor(private service: DataManagerService, private router: Router) { }
  ngOnInit(): void {
  }
  createDataManager() {
    this.service.createDataManager(this.datman).subscribe(data => { this.message = data; });
    //this.police = new Police("","","","","");
  }

}
