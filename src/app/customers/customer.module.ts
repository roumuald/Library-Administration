import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { OpenCustomerLoanComponent } from './open-customer-loan/open-customer-loan.component';

//declaration de differentes routes
const routeCustomer: Routes =[
    {path: 'updatePokemon/:id', component: EditCustomerComponent },
    {path: 'addCustomer', component: AddCustomerFormComponent},
    {path: 'allCustomer', component: ListCustomerComponent},
    {path: 'detailCustomer/:customerId', component: DetailCustomerComponent},
    {path: 'customerByEmail/:email', component: ListCustomerComponent},
    {path: 'allLoanByCustomer/:customerId', component: OpenCustomerLoanComponent}
 ];

@NgModule({
  declarations: [
    ListCustomerComponent,
    DetailCustomerComponent,
    EditCustomerComponent,
    AddCustomerFormComponent,
    OpenCustomerLoanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeCustomer),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class CustomerModule { }
