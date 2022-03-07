import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-admin-police-edit',
  templateUrl: './admin-police-edit.component.html',
  styleUrls: ['./admin-police-edit.component.css']
})
export class AdminPoliceEditComponent implements OnInit {

  police: Police = new Police("","","","","");
  un:string="";

  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.police = new Police("","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOnePolice(this.un).subscribe(data => { this.police = data; });
  }
  updatePolice() {
    this.service.updatePolice(this.police).subscribe(data => {
      console.log(data), this.router.navigate(['/p-all']);
    });
  }

}
