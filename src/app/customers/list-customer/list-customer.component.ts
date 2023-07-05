import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDto } from 'src/app/models/customer.dto';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit{

  customers: CustomerDto[] = [];
  //currentPage: number = 1;
  //pageSize: number = 10; // Nombre d'éléments par page
  //totalItems: number = 0; // Nombre total d'éléments
  customer: CustomerDto|null =null;
  customerId:number = this.router.snapshot.params['customerId'];

  // injection par constructeur
  constructor(private customerService:CustomerService, private route:Router, private router:ActivatedRoute){}

  // charge les donnees au demarrage de l'application
  ngOnInit() {
    this.getAllCustomers(); 
  }
  // methode de navigation 
  onMenu(){
    this.route.navigate(['/menu']);
  }
  onBookList(){
    this.route.navigate(['/allBook']);
  }
  onCategoryList(){
    this.route.navigate(['/allCategory']);
  }
  onLoanList(){
    this.route.navigate(['/allCategory']);
  }

  // methode qui communique avec le service
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    }, (error) => {
      console.error(error);
    });
  }
  getCustomerByEmail(email: string) {
    this.customerService.getCustomerByEmail(email).subscribe((result) => {
      this.customer = result;
    }, (error) => {
      console.error(error);
    });
  }
  confirmDelete(customerId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.deleteCustomer(customerId);
    }
  }
  deleteCustomer(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(
      () => {
        console.log('Le client a été supprimé avec succès.');
        this.route.navigate(['/allCustomer']);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression du client :', error);
      }
    );
  }
  detailCustomer(customer: CustomerDto){
    this.route.navigate(['/detailCustomer',customer.id]);
  }

  updateCustomer(customer:CustomerDto){
    this.route.navigate(['/updatePokemon', customer.id])
  }

  // onPageChange(page: number) {
  //   this.currentPage = page;
  //   this.getAllCustomers();
  // }

}
