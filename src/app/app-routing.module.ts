import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCaseRegisterComponent } from './admin-case-register/admin-case-register.component';
import { AdminCellDetailsComponent } from './admin-cell-details/admin-cell-details.component';
import { AdminDataManagersAllComponent } from './admin-data-managers-all/admin-data-managers-all.component';
import { AdminDataManagersCreateComponent } from './admin-data-managers-create/admin-data-managers-create.component';
import { AdminDataManagersEditComponent } from './admin-data-managers-edit/admin-data-managers-edit.component';
import { AdminDutyRegisterAllComponent } from './admin-duty-register-all/admin-duty-register-all.component';
import { AdminDutyRegisterCreateComponent } from './admin-duty-register-create/admin-duty-register-create.component';
import { AdminDutyRegisterEditComponent } from './admin-duty-register-edit/admin-duty-register-edit.component';
import { AdminInOutAllComponent } from './admin-in-out-all/admin-in-out-all.component';
import { AdminInOutCreateComponent } from './admin-in-out-create/admin-in-out-create.component';
import { AdminInOutEditComponent } from './admin-in-out-edit/admin-in-out-edit.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';
import { AdminPayRollAllComponent } from './admin-pay-roll-all/admin-pay-roll-all.component';
import { AdminPayRollCreateComponent } from './admin-pay-roll-create/admin-pay-roll-create.component';
import { AdminPayRollEditComponent } from './admin-pay-roll-edit/admin-pay-roll-edit.component';
import { AdminPoliceAllComponent } from './admin-police-all/admin-police-all.component';
import { AdminPoliceCreateComponent } from './admin-police-create/admin-police-create.component';
import { AdminPoliceEditComponent } from './admin-police-edit/admin-police-edit.component';
import { AdminPolicePayAllComponent } from './admin-police-pay-all/admin-police-pay-all.component';
import { AdminPrisonerAllComponent } from './admin-prisoner-all/admin-prisoner-all.component';
import { AdminPrisonerCreateComponent } from './admin-prisoner-create/admin-prisoner-create.component';
import { AdminPrisonerEditComponent } from './admin-prisoner-edit/admin-prisoner-edit.component';
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
  {path:'inout-all',component:AdminInOutAllComponent},
  {path:'inout-add',component:AdminInOutCreateComponent},
  {path:'inout-edit/:id',component:AdminInOutEditComponent},
  {path:'prison-all',component:AdminPrisonerAllComponent},
  {path:'prison-add',component:AdminPrisonerCreateComponent},
  {path:'prison-edit/:id',component:AdminPrisonerEditComponent},
  {path:'cell-all',component:AdminCellDetailsComponent},
  {path:'case-all',component:AdminCaseRegisterComponent},
  {path:'pay-all',component:AdminPayRollAllComponent},
  {path:'pay-add',component:AdminPayRollCreateComponent},
  {path:'pay-edit/:id',component:AdminPayRollEditComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}, 
  {path:'policepay-all',component:AdminPolicePayAllComponent},
  {path:'duty-all',component:AdminDutyRegisterAllComponent},
  {path:'duty-add',component:AdminDutyRegisterCreateComponent},
  {path:'duty-edit/:id',component:AdminDutyRegisterEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
