import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClinicResponse, Clinic } from '../models/clinic';
import { environment } from 'src/environments/environment';
import { CustomerResponse, Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  // *start clinic
  getClinic(): Observable<ClinicResponse> {
    return this.http.get<ClinicResponse>(`${environment.baseURL}api/clinicInfo`,{headers: this.headers})
  }

  addClinic(clinic: Clinic): Observable<ClinicResponse> {
    return this.http.post<ClinicResponse>(`${environment.baseURL}api/clinicSave`, clinic, {headers: this.headers})
  }

  updateClinic(clinic: Clinic): Observable<ClinicResponse> {
    return this.http.put<ClinicResponse>(`${environment.baseURL}api/clinicUpdate`, clinic, {headers: this.headers})
  }
  // *end Clinic

  // *start customer
  getCustomers(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(`${environment.baseURL}api/customerInfo`, {headers: this.headers})
  }

  getCustomer(_id: Customer): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`${environment.baseURL}api/customerInfo/${_id}`, {headers: this.headers})
  }

  addCustomer(customer: Customer): Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>(`${environment.baseURL}api/customerSave`, customer, {headers: this.headers})
  }
  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}api/customerUpdate`,customer, {headers: this.headers})
  }

  deleteCustomer(_id: Customer): Observable<CustomerResponse> {
    return this.http.delete<CustomerResponse>(`${environment.baseURL}api/customerDelete/${_id}`)
  }
  // *end customer







  // makeFormData(clinic: Clinic): FormData {
  //   const formData = new FormData()
  //   formData.append('name', clinic.name)
  //   formData.append('tel', clinic.tel)
  //   formData.append('tax', clinic.tax)
  //   formData.append('address', clinic.address)
  //   return formData
  // }


}
