import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPoliceCreateComponent } from './admin-police-create/admin-police-create.component';
import { AdminPoliceEditComponent } from './admin-police-edit/admin-police-edit.component';
import { AdminPoliceAllComponent } from './admin-police-all/admin-police-all.component';
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
import { AdminCellDetailsComponent } from './admin-cell-details/admin-cell-details.component';
import { AdminCaseRegisterComponent } from './admin-case-register/admin-case-register.component';
import { AdminPayRollAllComponent } from './admin-pay-roll-all/admin-pay-roll-all.component';
import { AdminPayRollCreateComponent } from './admin-pay-roll-create/admin-pay-roll-create.component';
import { AdminPayRollEditComponent } from './admin-pay-roll-edit/admin-pay-roll-edit.component';
import { AdminPolicePayAllComponent } from './admin-police-pay-all/admin-police-pay-all.component';
import { AdminDutyRegisterAllComponent } from './admin-duty-register-all/admin-duty-register-all.component';
import { AdminDutyRegisterCreateComponent } from './admin-duty-register-create/admin-duty-register-create.component';
import { AdminDutyRegisterEditComponent } from './admin-duty-register-edit/admin-duty-register-edit.component';
import { AdminPolicePaySearchEachComponent } from './admin-police-pay-search-each/admin-police-pay-search-each.component';
import { AdminDataManagerPaySearchEachComponent } from './admin-data-manager-pay-search-each/admin-data-manager-pay-search-each.component';
import { AdminDataManagerPayAllComponent } from './admin-data-manager-pay-all/admin-data-manager-pay-all.component';
import { AdminDataManagerSearchComponent } from './admin-data-manager-search/admin-data-manager-search.component';
import { AdminPoliceSearchComponent } from './admin-police-search/admin-police-search.component';
import { AdminInOutSearchComponent } from './admin-in-out-search/admin-in-out-search.component';
import { AdminPrisonerSearchComponent } from './admin-prisoner-search/admin-prisoner-search.component';
import { AdminPrisonerReportComponent } from './admin-prisoner-report/admin-prisoner-report.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPoliceCreateComponent,
    AdminPoliceEditComponent,
    AdminPoliceAllComponent,
    AdminDataManagersCreateComponent,
    AdminDataManagersEditComponent,
    AdminDataManagersAllComponent,
    AdminLoginComponent,
    AdminMainLayoutComponent,
    FIRAllComponent,
    AdminInOutAllComponent,
    AdminInOutCreateComponent,
    AdminInOutEditComponent,
    AdminPrisonerAllComponent,
    AdminPrisonerCreateComponent,
    AdminPrisonerEditComponent,
    AdminCellDetailsComponent,
    AdminCaseRegisterComponent,
    AdminPayRollAllComponent,
    AdminPayRollCreateComponent,
    AdminPayRollEditComponent,
    AdminPolicePayAllComponent,
    AdminDutyRegisterAllComponent,
    AdminDutyRegisterCreateComponent,
    AdminDutyRegisterEditComponent,
    AdminPolicePaySearchEachComponent,
    AdminDataManagerPaySearchEachComponent,
    AdminDataManagerPayAllComponent,
    AdminDataManagerSearchComponent,
    AdminPoliceSearchComponent,
    AdminInOutSearchComponent,
    AdminPrisonerSearchComponent,
    AdminPrisonerReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
