import { Component, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerDto } from 'src/app/models/customer.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent {

  customer: CustomerDto = new CustomerDto();  
  customerForm: FormGroup;

  constructor(private customerService:CustomerService, private formBuilder: FormBuilder){
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      job: [''],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', Validators.required]
    });
  }

  addCustomer(): void {
    this.customer.createdDate = new Date(); // Définissez la date de création sur la date actuelle
    this.customerService.addCustomer(this.customer).subscribe(
      (newCustomer: CustomerDto) => {
        console.log('Nouveau client ajouté :', newCustomer);
        // Réinitialisez le formulaire ou effectuez une autre action après l'ajout réussi du client
      },
      (error) => {
        console.log('Erreur lors de l\'ajout du client :', error);
      }
    );
  }



}
