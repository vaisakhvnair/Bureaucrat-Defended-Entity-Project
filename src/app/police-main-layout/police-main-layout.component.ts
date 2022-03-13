import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police-main-layout',
  templateUrl: './police-main-layout.component.html',
  styleUrls: ['./police-main-layout.component.css']
})
export class PoliceMainLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  viewPrison(){
    this.router.navigate(['police-all'])
  }
  policelogout(){
    this.router.navigate(['/'])
    alert("Do you want to log out")
  }

}
