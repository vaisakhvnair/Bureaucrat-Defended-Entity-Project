import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';

@Component({
  selector: 'app-data-manager-in-out-edit',
  templateUrl: './data-manager-in-out-edit.component.html',
  styleUrls: ['./data-manager-in-out-edit.component.css']
})
export class DataManagerInOutEditComponent implements OnInit {

  inout: InOut = new InOut("","","","","","","","");
  un:string="";

  constructor(private service: InOutService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.inout = new InOut("","","","","","","","");
    this.un = this.activeRouter.snapshot.params['un'];
    this.service.getOneInOut(this.un).subscribe(data => { this.inout = data; });
  }
  updateInOut() {
    this.service.updateInOut(this.inout).subscribe(data => {
      console.log(data), 
      this.router.navigate(['/dm-io-all']);
    });

  }

}
