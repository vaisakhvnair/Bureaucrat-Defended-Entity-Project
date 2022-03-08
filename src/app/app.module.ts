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
    AdminCellDetailsComponent
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
