import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ListLoanComponent } from './list-loan/list-loan.component';


//declaration de differentes routes
const routeLoan: Routes =[
  // {path: 'updatePokemon/:id', component: EditPokemonComponent},
  {path: 'addLoan', component: AddLoanComponent},
  {path: 'allLoan', component: ListLoanComponent } 
];

@NgModule({
  declarations: [
    AddLoanComponent,
    ListLoanComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forChild(routeLoan)
  ],
})
export class LoanModule { }
