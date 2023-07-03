import { Component } from '@angular/core';
import { LoanService } from '../loan.service';
import { LoanDto } from 'src/app/models/loan.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent {

  // loanDto: LoanDto = {
  //   // Initialisez les propriétés du prêt ici (customerName, bookTitle, etc.)
  // };

  constructor(private loanService: LoanService, private route:ActivatedRoute) { }

  // saveLoan(): void {
  //   const customerId = 123; // Remplacez par l'ID du client approprié
  //   const bookId = 456; // Remplacez par l'ID du livre approprié

  //   this.loanService.saveLoan(this.loanDto, customerId, bookId).subscribe((response: LoanDto) => {
  //     console.log('Prêt enregistré avec succès !', response)
  //   },(error)=>{
  //     console.log('echec de creation de pret', error);
  //   });
  // }
}
  
