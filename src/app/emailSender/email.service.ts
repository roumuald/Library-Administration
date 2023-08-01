import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:2000';

  envoyerEmail(emailRequest: EmailRequest): Observable<void> {
    const url = `${this.apiUrl}/envoyer-email`;
    return this.http.post<void>(url, emailRequest);
  }
}

export interface EmailRequest {
  expediteur: string;
  destinataire: string;
  sujet: string;
  contenu: string;
}