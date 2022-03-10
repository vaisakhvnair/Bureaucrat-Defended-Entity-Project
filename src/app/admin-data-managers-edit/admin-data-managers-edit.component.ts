import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-admin-data-managers-edit',
  templateUrl: './admin-data-managers-edit.component.html',
  styleUrls: ['./admin-data-managers-edit.component.css']
})
export class AdminDataManagersEditComponent implements OnInit {

  datman: DataManager = new DataManager("","","","","","","","");
  un:string="";

  constructor(private service: DataManagerService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.datman = new DataManager("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOneDataManager(this.un).subscribe(data => { this.datman = data; });
  }
  updateDataManager() {
    this.service.updateDataManager(this.datman).subscribe(data => {
      console.log(data), this.router.navigate(['/d-all']);
    });
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }

}
