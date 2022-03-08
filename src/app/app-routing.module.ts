import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDataManagersAllComponent } from './admin-data-managers-all/admin-data-managers-all.component';
import { AdminDataManagersCreateComponent } from './admin-data-managers-create/admin-data-managers-create.component';
import { AdminDataManagersEditComponent } from './admin-data-managers-edit/admin-data-managers-edit.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';
import { AdminPoliceAllComponent } from './admin-police-all/admin-police-all.component';
import { AdminPoliceCreateComponent } from './admin-police-create/admin-police-create.component';
import { AdminPoliceEditComponent } from './admin-police-edit/admin-police-edit.component';
import { FIRAllComponent } from './fir-all/fir-all.component';


const routes: Routes = [
  {path:'p-all',component:AdminPoliceAllComponent},
  {path:'p-add',component:AdminPoliceCreateComponent},
  {path:'p-edit/:id',component:AdminPoliceEditComponent},
  {path:'d-all',component:AdminDataManagersAllComponent},
  {path:'d-add',component:AdminDataManagersCreateComponent},
  {path:'d-edit/:id',component:AdminDataManagersEditComponent},
  {path:'login-admin',component:AdminLoginComponent},
  {path:'admin',component:AdminMainLayoutComponent},
  {path:'fir-all',component:FIRAllComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
