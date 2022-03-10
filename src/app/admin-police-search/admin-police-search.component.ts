import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Police } from '../police';
import { PoliceService } from '../police.service';

@Component({
  selector: 'app-admin-police-search',
  templateUrl: './admin-police-search.component.html',
  styleUrls: ['./admin-police-search.component.css']
})
export class AdminPoliceSearchComponent implements OnInit {

  constructor(private service: PoliceService, private activeRouter: ActivatedRoute, private router: Router) { }
  police: Police[] = [];
  pol: Police[] = [];
  strUn: string = "";
  strId: string = "";
  strNm: string = "";


  ngOnInit(): void {
    this.service.getAllPolice().subscribe(data => {
      this.police = data;
      this.pol = this.police
    });
  }
  search(){
    this.police = this.pol.filter((e1) => 
    { if(e1.userName.toLowerCase().indexOf(this.strUn.toLowerCase()) >= 0)
      return e1.userName.toLowerCase().indexOf(this.strUn.toLowerCase()) >= 0 
      else if(e1.id.toLowerCase().indexOf(this.strId.toLowerCase()) >= 0)
      return e1.id.toLowerCase().indexOf(this.strId.toLowerCase()) >= 0 
      else
      return e1.name.toLowerCase().indexOf(this.strNm.toLowerCase()) >= 0 })
  }

}
