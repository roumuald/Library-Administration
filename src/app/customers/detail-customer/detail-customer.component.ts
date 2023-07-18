import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDto } from 'src/app/models/customer.dto';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit{

  customer: CustomerDto;

  constructor(private customerService:CustomerService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    const customerId = this.route.snapshot.params['customerId'];
    this.customerService.getOnecustomer(customerId).subscribe((customer) => {
        this.customer = customer;
      }, (error) => {
        console.log(error);
      });
  }

  onClientList(){
    this.router.navigate(['allCustomer']);
  }

  // getCustomerByEmail(email: string) {
  //   this.customerService.getCustomerByEmail(email).subscribe((result) => {
  //     this.customer = result;
  //   }, (error) => {
  //     // Gérer les erreurs
  //     console.error(error);
  //   });
  // }
  
}
