import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-admin-in-out-edit',
  templateUrl: './admin-in-out-edit.component.html',
  styleUrls: ['./admin-in-out-edit.component.css']
})
export class AdminInOutEditComponent implements OnInit {

  inout: InOut = new InOut("","","","","","","","");
  un:string="";

  constructor(private service: InOutService, private activeRouter: ActivatedRoute, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.inout = new InOut("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOneInOut(this.un).subscribe(data => { this.inout = data; });
  }
  updateInOut() {
    this.service.updateInOut(this.inout).subscribe(data => {
      console.log(data), this.router.navigate(['/inout-all']);
    });

  }
  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }



}
