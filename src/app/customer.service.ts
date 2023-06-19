import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://code-engine-migration-java.13pe7kfy9tbl.us-south.codeengine.appdomain.cloud/customer/fetchAll';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomer(customerId: string): Observable<Customer> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Customer>(url, customer);
  }

  deleteCustomer(customerId: string): Observable<void> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.delete<void>(url);
  }
}
