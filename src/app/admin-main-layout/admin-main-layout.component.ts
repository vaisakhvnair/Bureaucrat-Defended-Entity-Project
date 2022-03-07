import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main-layout',
  templateUrl: './admin-main-layout.component.html',
  styleUrls: ['./admin-main-layout.component.css']
})
export class AdminMainLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewPolice(){
    this.router.navigate(['/p-all'])
  }
  viewDataManager(){
    this.router.navigate(['/d-all'])
  }
  addPolice(){
    this.router.navigate(['/p-add'])
  }
  addDataManager(){
    this.router.navigate(['/d-add'])
  }
  editPolice(){
    this.router.navigate(['p-edit/:id'])
  }
  editDataManager(){
    this.router.navigate(['d-edit/:id'])
  }




}
