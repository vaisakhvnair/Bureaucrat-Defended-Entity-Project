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
    DataManagerPrisonerCreateComponent,
    DataManagerPrisonerEditComponent,
    DataManagerPrisonerAllComponent,
    DataManagerPrisonerSearchComponent,
    DataManagerLoginComponent,
    DataManagerMainLayoutComponent,
    DataManagerInOutAllComponent,
    DataManagerInOutAddComponent,
    DataManagerInOutEditComponent,
    DataManagerDutyRegisterAllComponent
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
