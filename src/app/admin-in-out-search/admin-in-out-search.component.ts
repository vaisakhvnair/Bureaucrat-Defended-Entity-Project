import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOut } from '../in-out';
import { InOutService } from '../in-out.service';

@Component({
  selector: 'app-admin-in-out-search',
  templateUrl: './admin-in-out-search.component.html',
  styleUrls: ['./admin-in-out-search.component.css']
})
export class AdminInOutSearchComponent implements OnInit {

  constructor(private service: InOutService, private router: Router,private location: Location) { }

  police: InOut[] = [];
  pol: InOut[] = [];
  strUn: string = "";
  strId: string = "";
  strNm: string = "";
  strDe: string = "";


  ngOnInit(): void {
    this.service.getAllInOut().subscribe(data => {
      this.police = data;
      this.pol = this.police
    });
  }
  search(){
    this.police = this.pol.filter((e1) => 
    { if(e1.siNo.toLowerCase().indexOf(this.strUn.toLowerCase()) >= 0)
      return e1.siNo.toLowerCase().indexOf(this.strUn.toLowerCase()) >= 0 
      else if(e1.date.toLowerCase().indexOf(this.strId.toLowerCase()) >= 0)
      return e1.date.toLowerCase().indexOf(this.strId.toLowerCase()) >= 0 
      else if(e1.dept.toLowerCase().indexOf(this.strDe.toLowerCase()) >= 0)
      return e1.dept.toLowerCase().indexOf(this.strDe.toLowerCase()) >= 0 
      else
      return e1.name.toLowerCase().indexOf(this.strNm.toLowerCase()) >= 0 })
  }

  back(): void {
    this.location.back();
  }
  backtoadmin(){
    this.router.navigate(['/admin'])
  }
}
