import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAutomatedReleaseRegisterComponent } from './admin-automated-release-register/admin-automated-release-register.component';
import { AdminCaseRegisterComponent } from './admin-case-register/admin-case-register.component';
import { AdminCellDetailsComponent } from './admin-cell-details/admin-cell-details.component';
import { AdminDataManagerDutyEachComponent } from './admin-data-manager-duty-each/admin-data-manager-duty-each.component';
import { AdminDataManagerPayAllComponent } from './admin-data-manager-pay-all/admin-data-manager-pay-all.component';
import { AdminDataManagerPaySearchEachComponent } from './admin-data-manager-pay-search-each/admin-data-manager-pay-search-each.component';
import { AdminDataManagerSearchComponent } from './admin-data-manager-search/admin-data-manager-search.component';
import { AdminDataManagersAllComponent } from './admin-data-managers-all/admin-data-managers-all.component';
import { AdminDataManagersCreateComponent } from './admin-data-managers-create/admin-data-managers-create.component';
import { AdminDataManagersEditComponent } from './admin-data-managers-edit/admin-data-managers-edit.component';
import { AdminDutyRegisterAllComponent } from './admin-duty-register-all/admin-duty-register-all.component';
import { AdminDutyRegisterCreateComponent } from './admin-duty-register-create/admin-duty-register-create.component';
import { AdminDutyRegisterEditComponent } from './admin-duty-register-edit/admin-duty-register-edit.component';
import { AdminInOutAllComponent } from './admin-in-out-all/admin-in-out-all.component';
import { AdminInOutCreateComponent } from './admin-in-out-create/admin-in-out-create.component';
import { AdminInOutEditComponent } from './admin-in-out-edit/admin-in-out-edit.component';
import { AdminInOutSearchComponent } from './admin-in-out-search/admin-in-out-search.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';
import { AdminPayRollAllComponent } from './admin-pay-roll-all/admin-pay-roll-all.component';
import { AdminPayRollCreateComponent } from './admin-pay-roll-create/admin-pay-roll-create.component';
import { AdminPayRollEditComponent } from './admin-pay-roll-edit/admin-pay-roll-edit.component';
import { AdminPoliceAllComponent } from './admin-police-all/admin-police-all.component';
import { AdminPoliceCreateComponent } from './admin-police-create/admin-police-create.component';
import { AdminPoliceDutyEachComponent } from './admin-police-duty-each/admin-police-duty-each.component';
import { AdminPoliceEditComponent } from './admin-police-edit/admin-police-edit.component';
import { AdminPolicePayAllComponent } from './admin-police-pay-all/admin-police-pay-all.component';
import { AdminPolicePaySearchEachComponent } from './admin-police-pay-search-each/admin-police-pay-search-each.component';
import { AdminPoliceSearchComponent } from './admin-police-search/admin-police-search.component';
import { AdminPrisonerAllComponent } from './admin-prisoner-all/admin-prisoner-all.component';
import { AdminPrisonerCreateComponent } from './admin-prisoner-create/admin-prisoner-create.component';
import { AdminPrisonerEachSearchComponent } from './admin-prisoner-each-search/admin-prisoner-each-search.component';
import { AdminPrisonerEditComponent } from './admin-prisoner-edit/admin-prisoner-edit.component';
import { DataManagerDutyRegisterAllComponent } from './data-manager-duty-register-all/data-manager-duty-register-all.component';
import { DataManagerDutyRegisterCreateComponent } from './data-manager-duty-register-create/data-manager-duty-register-create.component';
import { DataManagerDutyRegisterEditComponent } from './data-manager-duty-register-edit/data-manager-duty-register-edit.component';
import { DataManagerInOutAddComponent } from './data-manager-in-out-add/data-manager-in-out-add.component';
import { DataManagerInOutAllComponent } from './data-manager-in-out-all/data-manager-in-out-all.component';
import { DataManagerInOutEditComponent } from './data-manager-in-out-edit/data-manager-in-out-edit.component';
import { DataManagerLoginComponent } from './data-manager-login/data-manager-login.component';
import { DataManagerMainLayoutComponent } from './data-manager-main-layout/data-manager-main-layout.component';
import { DataManagerPayrollAllComponent } from './data-manager-payroll-all/data-manager-payroll-all.component';
import { DataManagerPayrollCreateComponent } from './data-manager-payroll-create/data-manager-payroll-create.component';
import { DataManagerPayrollEditComponent } from './data-manager-payroll-edit/data-manager-payroll-edit.component';
import { DataManagerPrisonerAllComponent } from './data-manager-prisoner-all/data-manager-prisoner-all.component';
import { DataManagerPrisonerCreateComponent } from './data-manager-prisoner-create/data-manager-prisoner-create.component';
import { DataManagerPrisonerEditComponent } from './data-manager-prisoner-edit/data-manager-prisoner-edit.component';
import { DataManagerPrisonerSearchComponent } from './data-manager-prisoner-search/data-manager-prisoner-search.component';

import { FIRAllComponent } from './fir-all/fir-all.component';
import { PoliceLoginComponent } from './police-login/police-login.component';
import { PoliceMainLayoutComponent } from './police-main-layout/police-main-layout.component';
import { PolicePrisonerAllComponent } from './police-prisoner-all/police-prisoner-all.component';
import { PolicePrisonerSearchComponent } from './police-prisoner-search/police-prisoner-search.component';
import { ReportAllComponent } from './report-all/report-all.component';


const routes: Routes = [
  {path:'p-all',component:AdminPoliceAllComponent},
  {path:'p-add',component:AdminPoliceCreateComponent},
  {path:'p-edit/:id',component:AdminPoliceEditComponent},
  {path:'d-all',component:AdminDataManagersAllComponent},
  {path:'d-add',component:AdminDataManagersCreateComponent},
  {path:'d-edit/:id',component:AdminDataManagersEditComponent},
  {path:'login-admin',component:AdminLoginComponent},
  {path:'login-manager',component:DataManagerLoginComponent},
  {path:'admin',component:AdminMainLayoutComponent},
  {path:'manager',component:DataManagerMainLayoutComponent},
  {path:'fir-all',component:FIRAllComponent},
  {path:'report',component:ReportAllComponent},
  {path:'inout-all',component:AdminInOutAllComponent},
  {path:'inout-add',component:AdminInOutCreateComponent},
  {path:'inout-edit/:id',component:AdminInOutEditComponent},
  {path:'dm-p-all',component:DataManagerPrisonerAllComponent},
  {path:'dm-p-add',component:DataManagerPrisonerCreateComponent},
  {path:'dm-p-edit/:id',component:DataManagerPrisonerEditComponent},
  {path:'dm-p-search',component:DataManagerPrisonerSearchComponent},
  {path:'dm-io-all',component:DataManagerInOutAllComponent},
  {path:'dm-io-add',component:DataManagerInOutAddComponent},
  {path:'dm-io-edit/:id',component:DataManagerInOutEditComponent},
  {path:'dm-d-all',component:DataManagerDutyRegisterAllComponent},
  {path:'dm-d-add',component:DataManagerDutyRegisterCreateComponent},
  {path:'dm-d-edit/:id',component:DataManagerDutyRegisterEditComponent},
  {path:'dm-pay-all',component:DataManagerPayrollAllComponent},
  {path:'dm-pay-add',component:DataManagerPayrollCreateComponent},
  {path:'dm-pay-edit/:id',component:DataManagerPayrollEditComponent},
 {path:'prison-all',component:AdminPrisonerAllComponent},
  {path:'prison-add',component:AdminPrisonerCreateComponent},
  {path:'prison-edit/:id',component:AdminPrisonerEditComponent},
  {path:'login-police',component:PoliceLoginComponent},
  {path:'police',component:PoliceMainLayoutComponent},
  {path:'police-all',component:PolicePrisonerAllComponent},
  {path:'police-search',component:PolicePrisonerSearchComponent},

  {path:'admin-automated-release-register',component:AdminAutomatedReleaseRegisterComponent},

  {path:'cell-all',component:AdminCellDetailsComponent},
  {path:'case-all',component:AdminCaseRegisterComponent},
  {path:'pay-all',component:AdminPayRollAllComponent},
  {path:'pay-add',component:AdminPayRollCreateComponent},
  {path:'pay-edit/:id',component:AdminPayRollEditComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}, 
  {path:'policepay-all',component:AdminPolicePayAllComponent},
  {path:'policepay-eachSearch',component:AdminPolicePaySearchEachComponent},
  {path:'datpay-all',component:AdminDataManagerPayAllComponent},
  {path:'datpay-eachSearch',component:AdminDataManagerPaySearchEachComponent},
  {path:'duty-all',component:AdminDutyRegisterAllComponent},
  {path:'duty-add',component:AdminDutyRegisterCreateComponent},
  {path:'duty-edit/:id',component:AdminDutyRegisterEditComponent},
  {path:'admin-p-search',component:AdminPoliceSearchComponent},
  {path:'admin-d-search',component:AdminDataManagerSearchComponent},
  {path:'admin-polDuty-eachSearch',component:AdminPoliceDutyEachComponent},
  {path:'admin-datDuty-eachSearch',component:AdminDataManagerDutyEachComponent},
  {path:'admin-prisoner-eachSearch',component:AdminPrisonerEachSearchComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
