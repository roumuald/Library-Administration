import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/customer.dto';
import { LoanDto } from '../models/loan.dto';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http : HttpClient) { }

  addCustomer(customer: CustomerDto): Observable<CustomerDto> {
    const url = `${this.apiUrl}/addCustomer`;
    return this.http.post<CustomerDto>(url, customer);
  }

  getAllCustomers(): Observable<CustomerDto[]> {
    const url = `${this.apiUrl}/allCustomer`;
    return this.http.get<CustomerDto[]>(url);
    // Utilisez HttpParams pour ajouter les paramètres de pagination
    // let params = new HttpParams();
    // params = params.append('page', page.toString());
    // params = params.append('pageSize', pageSize.toString());
  }

  getCustomerByEmail(email: string): Observable<CustomerDto> {
    const url = `${this.apiUrl}/customerByEmail/${email}`;
    return this.http.get<CustomerDto>(url);
  }

  deleteCustomer(customerId: number): Observable<void> {
    const url = `${this.apiUrl}/deleteCustomer/${customerId}`;
    return this.http.delete<void>(url);
  }

  getOnecustomer(customerId:number): Observable<CustomerDto>{
    const url = `${this.apiUrl}/getOnCustomer/${customerId}`;
    return this.http.get<CustomerDto>(url);
  }

  getAllOpenLoanByCustomerId(customerId:number): Observable<LoanDto[]>{
    const url =`${this.apiUrl}/allLoanByCustomer/${customerId}`;
    return this.http.get<LoanDto[]>(url);
  }
  
}