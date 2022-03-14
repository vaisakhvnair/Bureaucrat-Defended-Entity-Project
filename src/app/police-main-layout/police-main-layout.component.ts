import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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
      cancelButtonText: 'No, stay in police',
    }).then((result) => {
      if (result.value) {
        this.policelogout();
        Swal.fire('Success!', 'LogOut successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'We are in police');
      }
    });
  }

}
