import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent {
  customer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    address: {
      city: '',
      streetName: '',
      addressLine1: '',
      addressLine2: '',
      pinCode: '',
      state: '',
      country: ''
    }
  };

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit(): void {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }

}
