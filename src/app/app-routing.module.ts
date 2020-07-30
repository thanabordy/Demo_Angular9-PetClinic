import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';
import { ReportComponent } from './main-content/report/report.component';
import { MedicineComponent } from './main-content/medicine/medicine.component';
import { TreatmentComponent } from './main-content/treatment/treatment.component';
import { PetComponent } from './main-content/pet/pet.component';
import { CustomerComponent } from './main-content/customer/customer.component';
import { ClinicComponent } from './main-content/clinic/clinic.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'clinic',
    component: ClinicComponent
  },
  {
    path: 'customer',
    component:CustomerComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: 'treatment',
    component: TreatmentComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
