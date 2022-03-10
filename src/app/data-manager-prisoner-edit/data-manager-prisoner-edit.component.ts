import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prisoner } from '../prisoner';
import { PrisonerService } from '../prisoner.service';

@Component({
  selector: 'app-data-manager-prisoner-edit',
  templateUrl: './data-manager-prisoner-edit.component.html',
  styleUrls: ['./data-manager-prisoner-edit.component.css']
})
export class DataManagerPrisonerEditComponent implements OnInit {

  prisoner:Prisoner=new Prisoner("","","","","","","","","","","","","","","","","","","","","");
pid:string="";
  constructor(private service:PrisonerService,private activeRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.prisoner =new Prisoner("","","","","","","","","","","","","","","","","","","","",""); 
    this.pid=this.activeRouter.snapshot.params['id'];    
     this.service.getOnePrisoner(this.pid).subscribe( data=>{ 
        this.prisoner=data; 
      } 
    );  
  }
  updateDetails(){ 
    this.service.updatePrisoner(this.prisoner).subscribe(data=>{      
       console.log(data), 
       this.router.navigate(['/d-all']);
    });
  }

}
