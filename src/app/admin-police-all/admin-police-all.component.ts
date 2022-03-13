import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Police } from '../police';
import { PoliceService } from '../police.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-police-all',
  templateUrl: './admin-police-all.component.html',
  styleUrls: ['./admin-police-all.component.css']
})
export class AdminPoliceAllComponent implements OnInit {

  police: Police[] = [];
  message: Message = new Message("","");
  poli:Police[]=[];
  sortColumn = "";
  order=1;
  constructor(private service: PoliceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPolice();
    this.poli=this.police

  }
  getAllPolice() {
    this.service.getAllPolice().subscribe(data => { this.police = data }, error => { this.police = [] });
  }
  deletePolice(id: any) {
    this.service.deleteOnePolice(id).subscribe(data => { this.message = data, this.getAllPolice(); },
      error => { console.log(error) });
  }
  editPolice(id: any) {
    this.router.navigate(['p-edit', id]);
  }

  onSortClickUs(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["userName"].charCodeAt(0) - e2["userName"].charCodeAt(0)) * this.order;});
  }
  onSortClickPs(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["password"].charCodeAt(0) - e2["password"].charCodeAt(0)) * this.order;});
  }
  onSortClickId(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["id"].charCodeAt(0) - e2["id"].charCodeAt(0)) * this.order;});
  }
  onSortClickNm(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["name"].charCodeAt(0) - e2["name"].charCodeAt(0)) * this.order;});
  }
  onSortClickDs(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["designation"].charCodeAt(0) - e2["designation"].charCodeAt(0)) * this.order;});
  }
  onSortClickHd(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["hiredate"].charCodeAt(0) - e2["hiredate"].charCodeAt(0)) * this.order;});
  }
  onSortClickEm(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["email"].charCodeAt(0) - e2["email"].charCodeAt(0)) * this.order;});
  }
  onSortClickAd(){
    this.poli = this.police.sort((e1, e2) => {  return (e1["address"].charCodeAt(0) - e2["address"].charCodeAt(0)) * this.order;});
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }

  alertConfirmation(id: any) {
    Swal.fire({
      title: 'Are you sure to delete it?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        this.deletePolice(id);
        Swal.fire('Removed!', 'record removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'record still in our database.', 'error');
      }
    });

  }

}
