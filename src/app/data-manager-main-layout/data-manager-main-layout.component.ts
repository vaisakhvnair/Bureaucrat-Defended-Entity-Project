import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-data-manager-main-layout',
  templateUrl: './data-manager-main-layout.component.html',
  styleUrls: ['./data-manager-main-layout.component.css']
})
export class DataManagerMainLayoutComponent implements OnInit {
  userName: string = "";
  datam:DataManager=new DataManager("","","","","","","","");
  uname:string="";
  
  constructor(private sobj:DataManagerService,private router:Router)
   { }

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
  //alert("Do you want to log out")
}
tinyAlert() {
  Swal.fire('', 'Logout Success !', 'success');
}

alertConfirmation() {
  Swal.fire({
    title: 'Are you sure to logout?',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, go ahead.',
    cancelButtonText: 'No, stay in admin',
  }).then((result) => {
    if (result.value) {
      this.homelogout();
      Swal.fire('Success!', 'LogOut successfully.', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelled', 'We are in admin');
    }
  });
}

}
