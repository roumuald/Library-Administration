import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDto } from '../models/loan.dto';
import { Observable } from 'rxjs';
import { LoanStatus } from '../models/loanStatus';
import { CustomerDto } from '../models/customer.dto';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = 'http://localhost:2000';

  constructor(private http:HttpClient) { }

  saveLoan(loanDto: LoanDto, customerId: number, bookId: number): Observable<LoanDto> {
    const url = `${this.apiUrl}/addLoan/${customerId}/${bookId}`;
    loanDto.startDate = new Date(); // Vous pouvez définir la date de début ici
    loanDto.status = LoanStatus.Open;
      return this.http.post<LoanDto>(url, loanDto);
  }

  getAllLoan(): Observable<LoanDto[]>{
    const url = `${this.apiUrl}/allLoans`;
    return this.http.get<LoanDto[]>(url);
  }

  getCustomerByLoanId(loanId:number): Observable<CustomerDto>{
    const url = `${this.apiUrl}/customerByloanId/${loanId}`;
    return this.http.get<CustomerDto>(url);
  }
 
  closeLoan(bookId: number, customerId: number): void {
    const url = `${this.apiUrl}/closeLoan/${bookId}/${customerId}`;
    this.http.post(url, {}).subscribe(
      () => {
        console.log('cloture du pret reussit')
      },
      (error) => {
        console.error('Erreur lors de la clôture de prêt :', error);
      }
    );
  }

  openLoan(bookId: number, customerId: number): void {
    const url = `${this.apiUrl}/openLoan/${bookId}/${customerId}`;
    this.http.post(url, {}).subscribe(
      () => {
        console.log('ouverture du pret reussit')
      },
      (error) => {
        console.error('Erreur lors de l\'ouverture de prêt :', error);
      }
    );
  }

  getallOpenLoansOfThisCustomer(email:string, status:LoanStatus): Observable<LoanDto[]> {
    const url = `${this.apiUrl}/allOpenLoansOfThisCustomer/${email}/${status}`
    return this.http.get<LoanDto[]>(url);
  } 
}

