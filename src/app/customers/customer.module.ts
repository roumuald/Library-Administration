import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from './customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//declaration de differentes routes
const routeCustomer: Routes =[
    {path: 'updatePokemon/:id', component: EditCustomerComponent },
    {path: 'addCustomer', component: AddCustomerFormComponent},
    {path: 'allCustomer', component: ListCustomerComponent},
    {path: 'detailCustomer/:customerId', component: DetailCustomerComponent},
    {path: 'customerByEmail/:email', component: ListCustomerComponent}
 ];

@NgModule({
  declarations: [
    ListCustomerComponent,
    DetailCustomerComponent,
    EditCustomerComponent,
    AddCustomerFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeCustomer),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
