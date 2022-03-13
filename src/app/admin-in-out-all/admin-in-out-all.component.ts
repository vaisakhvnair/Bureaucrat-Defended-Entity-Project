import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Message } from '../message';
import { Location } from '@angular/common'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-in-out-all',
  templateUrl: './admin-in-out-all.component.html',
  styleUrls: ['./admin-in-out-all.component.css']
})
export class AdminInOutAllComponent implements OnInit {


  inout: InOut[] = [];
  ino: InOut[] = [];
  sortColumn = "";
  order=1;
  message: Message = new Message("","");
  constructor(private service: InOutService, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.getAllInOut();
    this.ino=this.inout;

  }
  getAllInOut() {
    this.service.getAllInOut().subscribe(data => { this.inout = data }, error => { this.inout = [] });
  }
  deleteInOut(id: any) {
    this.service.deleteOneInOut(id).subscribe(data => { this.message = data, this.getAllInOut(); },
      error => { console.log(error) });
  }
  editInOut(id: any) {
    this.router.navigate(['inout-edit', id]);
  }
  back(): void {
    this.location.back()
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }

  onSortClick() {
   

    this.ino = this.inout.sort((e1, e2) => {

      if (this.sortColumn == "siNo") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "date") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }

      if (this.sortColumn == "name") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "dept") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "purpose") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "timeIn") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "timeOut") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      if (this.sortColumn == "dsignature") {
        return (e1[this.sortColumn].charCodeAt(0) - e2[this.sortColumn].charCodeAt(0)) * this.order;
      }
      return 0;
    });



}
alertConfirmation(id: any) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'This process is irreversible.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, go ahead.',
    cancelButtonText: 'No, let me think',
  }).then((result) => {
    if (result.value) {
      this.deleteInOut(id);
      Swal.fire('Removed!', 'record removed successfully.', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelled', 'record still in our database.', 'error');
    }
  });

}
}
