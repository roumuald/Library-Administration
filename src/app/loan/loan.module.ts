import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';


//declaration de differentes routes
const routeLoan: Routes =[
  // {path: 'updatePokemon/:id', component: EditPokemonComponent},
  {path: 'addLoan/:id/:id', component: AddLoanComponent}
  // {path: 'detailPokemon/:id', component: DetailPokemonComponent } 
];

@NgModule({
  declarations: [
    AddLoanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeLoan)
  ],
})
export class LoanModule { }
