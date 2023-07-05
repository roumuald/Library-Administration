import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BooKDto } from '../models/book.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:2000';

  constructor(private http:HttpClient) { }

  addBook(bookDto: BooKDto, categoryId: number): Observable<BooKDto> {
    const url = `${this.apiUrl}/addBook/${categoryId}`;
    return this.http.post<BooKDto>(url, bookDto);
  }
  
  getAllBook(page: number, pageSize: number): Observable<BooKDto[]> {
    const url = `${this.apiUrl}/allBook`;
    // Utilisez HttpParams pour ajouter les paramètres de pagination
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('pageSize', pageSize.toString());
    return this.http.get<BooKDto[]>(url, {params});
  }

  searchAllBookByTitle(title:string): Observable<BooKDto[]>{
    const url= `${this.apiUrl}/allBookByTitle/${title}`
    return this.http.get<BooKDto[]>(url);
  }

  deleteBook(bookId:number): Observable<void>{
    const url = `${this.apiUrl}/deleteBook/${bookId}`
    return this.http.delete<void>(url);
  }
  
}
