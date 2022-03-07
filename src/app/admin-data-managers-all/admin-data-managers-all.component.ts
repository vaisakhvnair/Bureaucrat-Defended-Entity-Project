import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import { Message } from '../message';

@Component({
  selector: 'app-admin-data-managers-all',
  templateUrl: './admin-data-managers-all.component.html',
  styleUrls: ['./admin-data-managers-all.component.css']
})
export class AdminDataManagersAllComponent implements OnInit {


  datman: DataManager[] = [];
  message: Message = new Message("","");
  constructor(private service: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDataManager();

  }
  getAllDataManager() {
    this.service.getAllDataManager().subscribe(data => { this.datman = data }, error => { this.datman = [] });
  }
  deleteDataManager(id: any) {
    this.service.deleteOneDataManager(id).subscribe(data => { this.message = data, this.getAllDataManager(); },
      error => { console.log(error) });
  }
  editDataManager(id: any) {
    this.router.navigate(['d-edit', id]);
  }

}
