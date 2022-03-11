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
  viewInOutReg(){
    this.router.navigate(['/inout-all'])
  }
  addInOutReg(){
    this.router.navigate(['/inout-add'])
  }
  editInOutReg(){
    this.router.navigate(['/inout-edit/:id'])
  }
  viewPrisonerReg(){
    this.router.navigate(['/prison-all'])
  }
  SearchInOutReg(){
    this.router.navigate(['/admin-inoutsearch'])
  }
  SearchPrisonerReg(){
    this.router.navigate(['/admin-prisonsearch'])
  }

  addPrisonerReg(){
    this.router.navigate(['/prison-add'])
  }
  editPrisonerReg(){
    this.router.navigate(['/prison-edit/:id'])
  }
  viewCell(){
    this.router.navigate(['/cell-all'])
  }
  viewCaseReg(){
    this.router.navigate(['/case-all'])
  }
  viewPayReg(){
    this.router.navigate(['/pay-all'])
  }
  addPayReg(){
    this.router.navigate(['/pay-add'])
  }
  editPayReg(){
    this.router.navigate(['/pay-edit/:id'])
  }
  policepay(){
    this.router.navigate(['/policepay-all'])
  }
  policepaySearch(){
    this.router.navigate(['/policepay-eachSearch'])
  }
  datpay(){
    this.router.navigate(['/datpay-all'])
  }
  datpaySearch(){
    this.router.navigate(['/datpay-eachSearch'])
  }
  viewDutyReg(){
    this.router.navigate(['/duty-all'])
  }
  addDutyReg(){
    this.router.navigate(['/duty-add'])
  }
  editDutyReg(){
    this.router.navigate(['/duty-edit/:id'])
  }

  PoliceSearch(){
    this.router.navigate(['/admin-p-search'])
  }
  DataManagerSearch(){
    this.router.navigate(['/admin-d-search'])
  }

PrisonerReport(){
  this.router.navigate(['/admin-prison-report'])
}
AutomatedReleaseRegister(){
  this.router.navigate(['/admin-automated-release-register'])
}

PoliceDutyEachSearch(){
  this.router.navigate(['/admin-polDuty-eachSearch'])
}
DataManagerDutyEachSearch(){
  this.router.navigate(['/admin-datDuty-eachSearch'])
}
fir(){
  this.router.navigate(['/fir-all'])
}
nominalRollsAdmin(){
  this.router.navigate(['/admin-prisoner-eachSearch'])
}

homelogout(){
  this.router.navigate(['/'])
  alert("Do you want to log out")
}
}
