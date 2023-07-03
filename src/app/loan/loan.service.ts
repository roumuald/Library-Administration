import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDto } from '../models/loan.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = 'http://localhost:2000';

  constructor(private http:HttpClient) { }

  saveLoan(loanDto: LoanDto, customerId: number, bookId: number): Observable<LoanDto> {
    const url = `${this.apiUrl}/addLoan/${customerId}/${bookId}`;
    loanDto.startDate = new Date(); // Vous pouvez définir la date de début ici
    return this.http.post<LoanDto>(url, loanDto);
  }
  
}

