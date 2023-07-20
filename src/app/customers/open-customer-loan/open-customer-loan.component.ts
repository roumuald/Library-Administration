import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { LoanDto } from 'src/app/models/loan.dto';
import { LoanService } from 'src/app/loan/loan.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CustomerDto } from 'src/app/models/customer.dto';

@Component({
  selector: 'app-open-customer-loan',
  templateUrl: './open-customer-loan.component.html',
  styleUrls: ['./open-customer-loan.component.css']
})
export class OpenCustomerLoanComponent implements OnInit{

  loans:LoanDto[];
  customer:CustomerDto
  itemsPerPage: number;
  currentPage: number;

  constructor(private customerService: CustomerService, private loanService: LoanService, 
              private route:ActivatedRoute){}

  ngOnInit(): void {
     this.itemsPerPage=7;
     this.currentPage=1;
     this.getAllOpenLoanByCustomer()
     this.getOneCustomer()
  }

  getAllOpenLoanByCustomer(){
    const customerId = this.route.snapshot.params['customerId'];
    this.customerService.getAllOpenLoanByCustomerId(customerId).subscribe((data)=>{
        this.loans = data;
    }, (error)=>{
      console.log(error);
    });
  }

  getOneCustomer(){
    const customerId = this.route.snapshot.params['customerId'];
    this.customerService.getOnecustomer(customerId).subscribe((customer)=>{
        this.customer=customer;
    }, (error)=>{
      console.log(error);
    })
  }

  confirmCloseLoan(customerId:number, bookId:number){
    if(confirm("voulez vous vraiment cloturer ce pret?")){
      this.onCloseLoan(customerId, bookId);
    }
  }

  onCloseLoan(bookId:number, customerId:number): void{
    this.loanService.closeLoan(bookId, customerId);
  }

  confirmOpenLoan(customerId:number, bookId:number){
    if(confirm("voulez vous vraiment ouvrir ce pret?")){
      this.onOpenLoan(customerId, bookId);
    }
  }
  
  onOpenLoan(bookId:number, customerId:number): void{
    this.loanService.openLoan(bookId, customerId);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  } 

}
