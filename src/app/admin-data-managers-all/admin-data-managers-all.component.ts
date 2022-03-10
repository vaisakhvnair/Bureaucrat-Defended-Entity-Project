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
  dat: DataManager[] = [];
  sortColumn = "";
  order=1;
  constructor(private service: DataManagerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDataManager();
    this.dat=this.datman

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

  onSortClickUs(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["userName"].charCodeAt(0) - e2["userName"].charCodeAt(0)) * this.order;});
  }
  onSortClickPs(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["password"].charCodeAt(0) - e2["password"].charCodeAt(0)) * this.order;});
  }
  onSortClickId(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["id"].charCodeAt(0) - e2["id"].charCodeAt(0)) * this.order;});
  }
  onSortClickNm(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["name"].charCodeAt(0) - e2["name"].charCodeAt(0)) * this.order;});
  }
  onSortClickDs(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["designation"].charCodeAt(0) - e2["designation"].charCodeAt(0)) * this.order;});
  }
  onSortClickHd(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["hiredate"].charCodeAt(0) - e2["hiredate"].charCodeAt(0)) * this.order;});
  }
  onSortClickEm(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["email"].charCodeAt(0) - e2["email"].charCodeAt(0)) * this.order;});
  }
  onSortClickAd(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["address"].charCodeAt(0) - e2["address"].charCodeAt(0)) * this.order;});
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }

}
