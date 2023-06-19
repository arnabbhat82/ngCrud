import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerId: string | undefined;
  customer: Customer = {} as Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.getCustomer();
  }

  getCustomer(): void {
    if (this.customerId) {
    this.customerService.getCustomer(this.customerId).subscribe((customer) => {
      this.customer = customer;
    });
  }
  }

  onSubmit(): void {
    if (this.customerId && this.customer) { // Check if customerId and customer are defined
      this.customerService.updateCustomer(this.customerId, this.customer).subscribe(() => {
        this.router.navigate(['/customers']);
      });
    }
  }

}
