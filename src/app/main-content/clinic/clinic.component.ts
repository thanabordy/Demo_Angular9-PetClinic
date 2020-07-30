import { Component, OnInit, ViewChild } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { NgForm } from '@angular/forms';
import { Clinic } from 'src/app/models/clinic';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  // @ViewChild('clinicForm', { static: true }) clinicForm: NgForm


  constructor(private service: NetworkService, private location: Location) { }
  clinicData = new Clinic();
  isShow:boolean = false;
  ngOnInit(): void {
    this.feedData();
  }

  feedData() {
    this.service.getClinic().subscribe(
      (response) => {
        if (response) {
          this.clinicData = response;
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      error => {
        console.log(JSON.stringify(error.error.message))
      }
    )

  }

  // one-way binding
  // onSubmit(values) {
  //   // alert(JSON.stringify(values))
  //   this.service.addClinic(values).subscribe(
  //     data => {
  //       alert(JSON.stringify(data))
  //     },
  //     error => {
  //       alert(error.error.message)
  //     }
  //   )
  // }

  // two-way binding
  onSubmit_add_update() {
    let clinic = this.clinicData;
    if (this.clinicData._id == null) {
      this.service.addClinic(clinic).subscribe(
        data => {
          if (data) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'success',
              showConfirmButton: false,
              timer: 1000
            }).then((result) => {
              if (result) {
                this.feedData();
              }
            })
          }
        },
        error => {
          alert(error.error.message)
        }
      )
    } else {
      this.service.updateClinic(clinic).subscribe(
        data => {
          if (data) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'success',
              showConfirmButton: false,
              timer: 1000
            }).then((result) => {
              if (result) {
                this.feedData();
              }
            })
          }
        },
        error => {
          alert(error.error.message)
        }
      )
    }
  }



  // onSubmit(clinicForm: NgForm) {
  //   if (clinicForm.invalid) {
  //     return;
  //   }
  //   const values = clinicForm.value;
  //   let clinic = new Clinic();
  //   clinic.name = values.name;
  //   clinic.tel = values.tel;
  //   clinic.tax = values.tax;
  //   clinic.address = values.address;

  //   // alert(JSON.stringify(values))
  //   this.service.saveClinic(clinic).subscribe(
  //     data => {
  //       alert(JSON.stringify(data))
  //     },
  //     error => {
  //       alert(error.error.message)
  //     }
  //   )


  //   // makeFormData(clinic: Clinic): FormData {
  // //   const formData = new FormData()
  // //   formData.append('name', clinic.name)
  // //   formData.append('tel', clinic.tel)
  // //   formData.append('tax', clinic.tax)
  // //   formData.append('address', clinic.address)
  // //   return formData
  // // }
  // }



}
