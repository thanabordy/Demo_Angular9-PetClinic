import { Component, OnInit, ViewChild } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { Customer, CustomerResponse } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  fetchCustomer: CustomerResponse[] = []
  customerData: Customer = new Customer();
  // IsmodelShow = false


  @ViewChild('customerForm', { static: true }) customerForm: NgForm
  @ViewChild('closebutton') closebutton;

  constructor(private service: NetworkService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.feedData();
  }


  // close() {
  //   this.IsmodelShow = true;// set false while you need open your model popup
  //   // do your more code
  //   if (this.IsmodelShow) {
  //     this.customerForm.reset()
  //   }
  // }

  resets(){
    this.customerForm.reset()
  }

  feedData() {
    this.service.getCustomers().subscribe(
      (response: CustomerResponse[]) => {
        this.fetchCustomer = response;
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error.message,
        })
      }
    )
  }

  onSubmit_add_update() {
    let customer = this.customerData;
    if (customer._id == null) {
      this.service.addCustomer(customer).subscribe(
        data => {
          if (data) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'success',
              showConfirmButton: false,
              timer: 1000
            })
              .then((result) => {
                if (result) {
                  this.feedData();
                  this.customerForm.reset()
  
                }
              })
          }
        },
        error => {
          alert(error.error.message)
        }
      )
    }else{
      this.service.updateCustomer(customer).subscribe(
        data => {
          if (data) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'success',
              showConfirmButton: false,
              timer: 1000
            })
              .then((result) => {
                if (result) {
                  this.feedData();
                  this.customerForm.reset()
  
                }
              })
          }
        },
        error => {
          alert(error.error.message)
        }
      )


      // alert(JSON.stringify(customer))
      // this.customerForm.reset()
    }
  }

  feedCustomer(items) {
      this.service.getCustomer(items._id).subscribe(
        (response) => {
          var {_id, code, name, email, tel, line_id, address } = { ...response }
          this.customerForm.setValue({_id, code, name, email, tel, line_id, address })
        }
      )


  }



  deleteCustomer(items) {

    Swal.fire({
      title: 'Are you sure?',
      text: `Delete Customer-Code: ${items.code}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteCustomer(items._id).subscribe(
          data => {
            if (data) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'success',
                showConfirmButton: false,
                timer: 1000
              })
                .then((result) => {
                  if (result) {
                    this.feedData();
                  }
                })
            }
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.error.message,
            })
          }
        )
      }
    })
  }


}
