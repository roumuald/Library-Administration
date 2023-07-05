import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerDto } from 'src/app/models/customer.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent implements OnInit{ 
  customerForm: FormGroup;

  constructor(private customerService:CustomerService, private formBuilder: FormBuilder, private router: Router){}
  ngOnInit(): void {
    this.initialisationFormulaire();
  }

  initialisationFormulaire(){
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      job: [''],
      email: ['', [Validators.required, Validators.email]],
      adress: ['', [Validators.required]]
    });
  }

  addCustomer(): void {
    const customer = new CustomerDto(
      this.customerForm.value['firstName'], 
      this.customerForm.value['lastName'],
      this.customerForm.value['job'],
      this.customerForm.value['email'],
      this.customerForm.value['adress'],);
    customer.createdDate = new Date(); // Définissez la date de création sur la date actuelle
     
    this.customerService.addCustomer(customer).subscribe(
      (newCustomer: CustomerDto) => {
        console.log('Nouveau client ajouté :', newCustomer);
        this.router.navigate(['/allCustomer']);
        // Réinitialisez le formulaire ou effectuez une autre action après l'ajout réussi du client
      },
      (error) => {
        console.log('Erreur lors de l\'ajout du client :', error);
      }
    );
  }



}
