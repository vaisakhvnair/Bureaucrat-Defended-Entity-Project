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
viewDutyRegister(){
  this.router.navigate(['/dm-d-all'])
}
addDutyRegister(){
  this.router.navigate(['/dm-d-add'])
}
editDutyRegister(){
  this.router.navigate(['dm-d-edit/:id'])
}
viewPayrollRegister(){
  this.router.navigate(['/dm-pay-all'])
}
addPayrollRegister(){
  this.router.navigate(['/dm-pay-add'])
}
editPayrollRegister(){
  this.router.navigate(['dm-pay-edit/:id'])
}
homelogout(){
  this.router.navigate(['/'])
  alert("Do you want to log out")
}
}
