import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-admin-police-all',
  templateUrl: './admin-police-all.component.html',
  styleUrls: ['./admin-police-all.component.css']
})
export class AdminPoliceAllComponent implements OnInit {

  police: Police[] = [];
  message: Message = new Message("","");
  constructor(private service: PoliceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPolice();

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


}
