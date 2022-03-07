import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDataManagersAllComponent } from './admin-data-managers-all/admin-data-managers-all.component';
import { AdminDataManagersCreateComponent } from './admin-data-managers-create/admin-data-managers-create.component';
import { AdminPoliceAllComponent } from './admin-police-all/admin-police-all.component';
import { AdminPoliceCreateComponent } from './admin-police-create/admin-police-create.component';
import { AdminPoliceEditComponent } from './admin-police-edit/admin-police-edit.component';

const routes: Routes = [
  {path:'p-all',component:AdminPoliceAllComponent},
  {path:'p-add',component:AdminPoliceCreateComponent},
  {path:'p-edit/:id',component:AdminPoliceEditComponent},
  {path:'d-all',component:AdminDataManagersAllComponent},
  {path:'d-add',component:AdminDataManagersCreateComponent},
  {path:'d-edit/:id',component:AdminPoliceEditComponent},
  {path:'',redirectTo:'all',pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
