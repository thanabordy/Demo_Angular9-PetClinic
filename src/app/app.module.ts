import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { ClinicComponent } from './main-content/clinic/clinic.component';
import { PetComponent } from './main-content/pet/pet.component';
import { MedicineComponent } from './main-content/medicine/medicine.component';
import { ReportComponent } from './main-content/report/report.component';
import { TreatmentComponent } from './main-content/treatment/treatment.component';
import { CustomerComponent } from './main-content/customer/customer.component';
import { MainContentComponent } from './main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    ClinicComponent,
    PetComponent,
    MedicineComponent,
    ReportComponent,
    TreatmentComponent,
    CustomerComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
