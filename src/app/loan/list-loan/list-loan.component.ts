import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { LoanDto } from 'src/app/models/loan.dto';
import { CustomerService } from 'src/app/customers/customer.service';
import { CustomerDto } from 'src/app/models/customer.dto';
import { ActivatedRoute } from '@angular/router';
import { BooKDto } from 'src/app/models/book.dto';
import { LoanStatus } from 'src/app/models/loanStatus';

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit{

  loans:LoanDto[];
  email:string
  status:LoanStatus
  isLoading = false;

  itemsPerPage: number;
  currentPage: number;

  constructor(private loanService:LoanService, private customerService:CustomerService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.itemsPerPage = 7;
    this.currentPage = 1;
    this.getAllLoan();
  }

  getAllLoan(){
    this.loanService.getAllLoan().subscribe((loans)=>{
      this.loans=loans;
  }, (error)=>{
      console.log('erreur de chargement de prets', error);   
  })
}

onCloseLoan(bookId:number, customerId:number): void{
  this.loanService.closeLoan(bookId, customerId);
}

onOpenLoan(bookId:number, customerId:number): void{
  this.loanService.openLoan(bookId, customerId);
}

confirmCloseLoan(bookId: number, customerId: number): void{
  if(confirm("Etes vous sur de vouloir cloturer ce pret?")){
    this.onCloseLoan(bookId, customerId);
  }
}

confirmOpenLoan(customerId:number, bookId:number){
  if(confirm("voulez vous vraiment ouvrir ce pret?")){
    this.onOpenLoan(customerId, bookId);
  }
}

getallOpenLoansOfThisCustomer(){
  if(this.email&&this.status){
    this.isLoading=true;
    this.loanService.getallOpenLoansOfThisCustomer(this.email, this.status).subscribe((loans)=>{
      this.loans=loans; 
    }, (error)=>{
      console.log("erreur de chargement"+ error);
    });
    this.isLoading = false;
    }else{
      this.getAllLoan();
    }
  }

onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  } 

}
