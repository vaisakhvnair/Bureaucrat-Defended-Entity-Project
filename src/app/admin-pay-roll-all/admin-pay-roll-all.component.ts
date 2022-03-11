import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { PayRoll } from '../pay-roll';
import { PayRollService } from '../pay-roll.service';

@Component({
  selector: 'app-admin-pay-roll-all',
  templateUrl: './admin-pay-roll-all.component.html',
  styleUrls: ['./admin-pay-roll-all.component.css']
})
export class AdminPayRollAllComponent implements OnInit {

  datman: PayRoll[] = [];
  dat: PayRoll[] = [];
  message: Message = new Message("","");
  sortColumn = "";
  order=1;
  constructor(private service: PayRollService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllPayRoll();
    this.dat=this.datman;

  }
  getAllPayRoll() {
    this.service.getAllPayRoll().subscribe(data => { this.datman = data }, error => { this.datman = [] });
  }
  deletePayRoll(id: any) {
    this.service.deleteOnePayRoll(id).subscribe(data => { this.message = data, this.getAllPayRoll(); },
      error => { console.log(error) });
  }
  editPayRoll(id: any) {
    this.router.navigate(['pay-edit', id]);
  }

  onSortClickUm(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["userName"].charCodeAt(0) - e2["userName"].charCodeAt(0)) * this.order;});
  }
  onSortClickPd(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["pid"].charCodeAt(0) - e2["pid"].charCodeAt(0)) * this.order;});
  }
  onSortClickNm(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["name"].charCodeAt(0) - e2["name"].charCodeAt(0)) * this.order;});
  }
  onSortClickRs(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["regularSalary"].charCodeAt(0) - e2["regularSalary"].charCodeAt(0)) * this.order;});
  }
  onSortClickPs(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["partTimeSalary"].charCodeAt(0) - e2["partTimeSalary"].charCodeAt(0)) * this.order;});
  }
  onSortClickAs(){
    this.dat = this.datman.sort((e1, e2) => {  return (e1["annualSalary"].charCodeAt(0) - e2["annualSalary"].charCodeAt(0)) * this.order;});
  }

  back(): void {
    this.location.back()
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
