import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPoliceCreateComponent } from './admin-police-create/admin-police-create.component';
import { AdminPoliceEditComponent } from './admin-police-edit/admin-police-edit.component';
import { AdminPoliceAllComponent } from './admin-police-all/admin-police-all.component';
import { AdminPoliceSearchComponent } from './admin-police-search/admin-police-search.component';
import { AdminDataManagersCreateComponent } from './admin-data-managers-create/admin-data-managers-create.component';
import { AdminDataManagersEditComponent } from './admin-data-managers-edit/admin-data-managers-edit.component';
import { AdminDataManagersAllComponent } from './admin-data-managers-all/admin-data-managers-all.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';
import { FIRAllComponent } from './fir-all/fir-all.component';
import { AdminInOutAllComponent } from './admin-in-out-all/admin-in-out-all.component';
import { AdminInOutCreateComponent } from './admin-in-out-create/admin-in-out-create.component';
import { AdminInOutEditComponent } from './admin-in-out-edit/admin-in-out-edit.component';
import { AdminPrisonerAllComponent } from './admin-prisoner-all/admin-prisoner-all.component';
import { AdminPrisonerCreateComponent } from './admin-prisoner-create/admin-prisoner-create.component';
import { AdminPrisonerEditComponent } from './admin-prisoner-edit/admin-prisoner-edit.component';
import { DataManagerPrisonerCreateComponent } from './data-manager-prisoner-create/data-manager-prisoner-create.component';
import { DataManagerPrisonerEditComponent } from './data-manager-prisoner-edit/data-manager-prisoner-edit.component';
import { DataManagerPrisonerAllComponent } from './data-manager-prisoner-all/data-manager-prisoner-all.component';
import { DataManagerPrisonerSearchComponent } from './data-manager-prisoner-search/data-manager-prisoner-search.component';
import { DataManagerLoginComponent } from './data-manager-login/data-manager-login.component';
import { DataManagerMainLayoutComponent } from './data-manager-main-layout/data-manager-main-layout.component';
import { DataManagerInOutAllComponent } from './data-manager-in-out-all/data-manager-in-out-all.component';
import { DataManagerInOutAddComponent } from './data-manager-in-out-add/data-manager-in-out-add.component';
import { DataManagerInOutEditComponent } from './data-manager-in-out-edit/data-manager-in-out-edit.component';
import { DataManagerDutyRegisterAllComponent } from './data-manager-duty-register-all/data-manager-duty-register-all.component';
import { DataManagerDutyRegisterCreateComponent } from './data-manager-duty-register-create/data-manager-duty-register-create.component';
import { DataManagerDutyRegisterEditComponent } from './data-manager-duty-register-edit/data-manager-duty-register-edit.component';
import { DataManagerPayrollAllComponent } from './data-manager-payroll-all/data-manager-payroll-all.component';
import { DataManagerPayrollCreateComponent } from './data-manager-payroll-create/data-manager-payroll-create.component';
import { DataManagerPayrollEditComponent } from './data-manager-payroll-edit/data-manager-payroll-edit.component';
import { AdminPolicePaySearchEachComponent } from './admin-police-pay-search-each/admin-police-pay-search-each.component';
import { AdminAutomatedReleaseRegisterComponent } from './admin-automated-release-register/admin-automated-release-register.component';
import { AdminCaseRegisterComponent } from './admin-case-register/admin-case-register.component';
import { AdminPrisonerSearchComponent } from './admin-prisoner-search/admin-prisoner-search.component';
import { AdminDataManagerPaySearchEachComponent } from './admin-data-manager-pay-search-each/admin-data-manager-pay-search-each.component';
import { AdminCellDetailsComponent } from './admin-cell-details/admin-cell-details.component';
import { AdminPrisonerReportComponent } from './admin-prisoner-report/admin-prisoner-report.component';
import { AdminPolicePayAllComponent } from './admin-police-pay-all/admin-police-pay-all.component';
import { AdminInOutSearchComponent } from './admin-in-out-search/admin-in-out-search.component';
import { AdminPayRollAllComponent } from './admin-pay-roll-all/admin-pay-roll-all.component';
import { AdminPayRollEditComponent } from './admin-pay-roll-edit/admin-pay-roll-edit.component';
import { AdminPayRollCreateComponent } from './admin-pay-roll-create/admin-pay-roll-create.component';
import { AdminDataManagerPayAllComponent } from './admin-data-manager-pay-all/admin-data-manager-pay-all.component';
import { AdminDutyRegisterEditComponent } from './admin-duty-register-edit/admin-duty-register-edit.component';
import { AdminDutyRegisterAllComponent } from './admin-duty-register-all/admin-duty-register-all.component';
import { AdminDutyRegisterCreateComponent } from './admin-duty-register-create/admin-duty-register-create.component';
import { AdminDataManagerSearchComponent } from './admin-data-manager-search/admin-data-manager-search.component';
import { AdminPoliceDutyEachComponent } from './admin-police-duty-each/admin-police-duty-each.component';
import { AdminDataManagerDutyEachComponent } from './admin-data-manager-duty-each/admin-data-manager-duty-each.component';
import { ReportAllComponent } from './report-all/report-all.component';
import { AdminPrisonerEachSearchComponent } from './admin-prisoner-each-search/admin-prisoner-each-search.component';
import { PolicePrisonerAllComponent } from './police-prisoner-all/police-prisoner-all.component';
import { PolicePrisonerSearchComponent } from './police-prisoner-search/police-prisoner-search.component';
import { PoliceLoginComponent } from './police-login/police-login.component';
import { PoliceMainLayoutComponent } from './police-main-layout/police-main-layout.component';
import { NgxPrintModule } from 'ngx-print';
import { HomeImageComponent } from './home-image/home-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPoliceCreateComponent,
    AdminPoliceEditComponent,
    AdminPoliceAllComponent,
    AdminPoliceSearchComponent,
    AdminDataManagersCreateComponent,
    AdminDataManagersEditComponent,
    AdminDataManagersAllComponent,
    AdminPolicePaySearchEachComponent,
    AdminAutomatedReleaseRegisterComponent,
    AdminCaseRegisterComponent,
    AdminPrisonerSearchComponent,
    AdminDataManagerPaySearchEachComponent,
    AdminCellDetailsComponent,
    AdminPrisonerReportComponent,
    AdminPolicePayAllComponent,
    AdminInOutSearchComponent,
    AdminPayRollAllComponent,
    AdminPayRollEditComponent,
    AdminPayRollCreateComponent,
    AdminDataManagerPayAllComponent,
    AdminDutyRegisterEditComponent,
    AdminDutyRegisterAllComponent,
    AdminDutyRegisterCreateComponent,
    AdminDataManagerSearchComponent,
    AdminPoliceDutyEachComponent,
    AdminDataManagerDutyEachComponent,
    AdminPrisonerEachSearchComponent,
    AdminLoginComponent,
    AdminMainLayoutComponent,
    FIRAllComponent,
    AdminInOutAllComponent,
    AdminInOutCreateComponent,
    AdminInOutEditComponent,
    AdminPrisonerAllComponent,
    AdminPrisonerCreateComponent,
    AdminPrisonerEditComponent,
    DataManagerPrisonerCreateComponent,
    DataManagerPrisonerEditComponent,
    DataManagerPrisonerAllComponent,
    DataManagerPrisonerSearchComponent,
    DataManagerLoginComponent,
    DataManagerMainLayoutComponent,
    DataManagerInOutAllComponent,
    DataManagerInOutAddComponent,
    DataManagerInOutEditComponent,
    DataManagerDutyRegisterAllComponent,
    DataManagerDutyRegisterCreateComponent,
    DataManagerDutyRegisterEditComponent,
    DataManagerPayrollAllComponent,
    DataManagerPayrollCreateComponent,
    DataManagerPayrollEditComponent,
    ReportAllComponent,
    PolicePrisonerAllComponent,
    PolicePrisonerSearchComponent,
    PoliceLoginComponent,
    PoliceMainLayoutComponent,
    HomeImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
