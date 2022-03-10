import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DutyRegister } from '../duty-register';
import { DutyRegisterService } from '../duty-register.service';

@Component({
  selector: 'app-data-manager-duty-register-edit',
  templateUrl: './data-manager-duty-register-edit.component.html',
  styleUrls: ['./data-manager-duty-register-edit.component.css']
})
export class DataManagerDutyRegisterEditComponent implements OnInit {

  duty: DutyRegister = new DutyRegister("","","","","","");
  un:string="";

  constructor(private service: DutyRegisterService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.duty = new DutyRegister("","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOneDutyRegister(this.un).subscribe(data => { this.duty = data; });
  }
  updateDutyReg() {
    this.service.updateDutyRegister(this.duty).subscribe(data => {
      console.log(data), this.router.navigate(['/dm-d-all']);
    });
  }

}
