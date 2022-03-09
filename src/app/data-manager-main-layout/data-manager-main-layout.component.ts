import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-manager-main-layout',
  templateUrl: './data-manager-main-layout.component.html',
  styleUrls: ['./data-manager-main-layout.component.css']
})
export class DataManagerMainLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewPrisonerData(){
    this.router.navigate(['/dm-p-all'])
  }
  
  addPrisonerData(){
    this.router.navigate(['/dm-p-add'])
  }
  
  editPrisonerData(){
    this.router.navigate(['dm-p-edit/:id'])
  }
  viewInOutData(){
    this.router.navigate(['/dm-io-all'])
  }
  addInOutData(){
    this.router.navigate(['/dm-io-add'])
  }
  editInOutData(){
    this.router.navigate(['dm-io-edit/:id'])
  }


}
