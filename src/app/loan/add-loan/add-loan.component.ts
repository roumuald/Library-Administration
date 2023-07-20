import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { LoanDto } from 'src/app/models/loan.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { CustomerService } from 'src/app/customers/customer.service';
import { BookService } from 'src/app/books/book.service';
import { CustomerDto } from 'src/app/models/customer.dto';
import { BooKDto } from 'src/app/models/book.dto';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit{

  loanForm: FormGroup;
  customers:CustomerDto[];
  books:BooKDto[];

  constructor(private loanService: LoanService, private route:ActivatedRoute, 
    private customerService: CustomerService, private bookService:BookService, private router:Router,
    private formBuilder: FormBuilder /*public dialog: MatDialog*/) { }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllBook();
    this.initialisationFormulaire();
  }

  initialisationFormulaire(){
    this.loanForm = this.formBuilder.group({
      endDate: ['', [Validators.required]],
      customerId: ['', [Validators.required]],
      bookId: ['', [Validators.required]]
    });
  }

  getAllCustomer(){
    this.customerService.getAllCustomers().subscribe((customers)=>{
      this.customers=customers;
    }, (error)=>{
      console.log('erreur lors du chargement de client', error); 
    })
  }
  getAllBook(){
    this.bookService.getAllBook().subscribe((books)=>{
      this.books=books;
    }, (error)=>{
      console.log('erreur de chargement de livre', error);
    })
  }

  saveLoan(): void {
    const loanDto = new LoanDto(
      this.loanForm.value['endDate']
    )
    const customerId = this.loanForm.value['customerId'];
    const bookId = this.loanForm.value['bookId'];
    const endDate = new Date(loanDto.endDate);
    if(endDate > new Date()){
      this.loanService.saveLoan(loanDto, customerId, bookId).subscribe((response: LoanDto) => {
        console.log('Prêt enregistré avec succès !', response)
        this.router.navigate(['/allLoan']);
      },(error)=>{
        console.log('echec de creation de pret', error);
      });
    }else{
      alert("la date de fin doit etre superieur ou egale a la date d'aujourd'hui");
    } 
  }
}
  
