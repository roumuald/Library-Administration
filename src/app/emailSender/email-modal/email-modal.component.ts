import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customers/customer.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EmailRequest, EmailService } from '../email.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.css']
})
export class EmailModalComponent implements OnInit{

  expediteur: string;
  destinataire: string;
  sujet: string;
  contenu: string;

  constructor(private emailService: EmailService, private route:Router){}

  ngOnInit(): void {
    this.expediteur='roumualdnoubiap@gmail.com'
  }

  envoyerEmail() {

    const emailRequest: EmailRequest = {
      expediteur: this.expediteur,
      destinataire: this.destinataire,
      sujet: this.sujet,
      contenu: this.contenu,
    };
    this.emailService.envoyerEmail(emailRequest).subscribe(
      () => {
        console.log('E-mail envoyé avec succès !');
        this.route.navigate(['/allCustomer']);
      },
      (error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      }
    );
  }
}


