import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager } from '../data-manager';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-admin-data-manager-search',
  templateUrl: './admin-data-manager-search.component.html',
  styleUrls: ['./admin-data-manager-search.component.css']
})
export class AdminDataManagerSearchComponent implements OnInit {

  constructor(private service: DataManagerService,private router:Router) { }
  police: DataManager[] = [];
  pol: DataManager[] = [];
  strUn: string = "";
  strId: string = "";
  strNm: string = "";


  ngOnInit(): void {
    this.service.getAllDataManager().subscribe(data => {
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

  backtoadmin(){
    this.router.navigate(['/admin'])
  }

}
