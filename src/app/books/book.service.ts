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
    bookDto.stock=bookDto.totalExamp;
    return this.http.post<BooKDto>(url, bookDto);
  }
  
  getAllBook(): Observable<BooKDto[]> {
    const url = `${this.apiUrl}/allBooks`;
    return this.http.get<BooKDto[]>(url);
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
