import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { LoanDto } from 'src/app/models/loan.dto';
import { CustomerService } from 'src/app/customers/customer.service';
import { CustomerDto } from 'src/app/models/customer.dto';
import { ActivatedRoute } from '@angular/router';
import { BooKDto } from 'src/app/models/book.dto';

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit{

  loans:LoanDto[];
  email:string
  loan:LoanDto

  constructor(private loanService:LoanService, private customerService:CustomerService, private route:ActivatedRoute){}

  ngOnInit(): void {
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

// getallOpenLoansOfThisCustomer(){
//   if(this.email&&status){
//     this.loanService.getallOpenLoansOfThisCustomer(this.email, status).subscribe((loans)=>{
//       this.loans=loans;
//     }, (error)=>{
//       console.log("erreur de chargement"+ error);
//     });
//   }else{
//     this.getAllLoan();
//   }
//   }
  

}
