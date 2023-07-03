import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from '../models/category.dto';
import { BooKDto } from '../models/book.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private apiUrl = 'http://localhost:2000';

  constructor(private http:HttpClient) { }

  addCategory(category: CategoryDto): Observable<CategoryDto> {
    const url = `${this.apiUrl}/addCategory`;
    return this.http.post<CategoryDto>(url, category);
  }

  getAllCategory(): Observable<CategoryDto[]>{
    const url=`${this.apiUrl}/getAllCategory`
    return this.http.get<CategoryDto[]>(url);
  }

  deleteCategory(id:number): Observable<void>{
    const url = `${this.apiUrl}/deleteCategorie/${id}`
    return this.http.delete<void>(url);
  }

  getCategoryByLabel(label: string): Observable<CategoryDto[]> {
    const url = `${this.apiUrl}/allCategoryByLabel/${label}`;
    return this.http.get<CategoryDto[]>(url);
  }

  getBookByCategory(id:number): Observable<BooKDto[]>{
    const url = `${this.apiUrl}/bookByCategory/${id}`;
    return this.http.get<BooKDto[]>(url);
  }

  getOneCategory(id:number): Observable<CategoryDto>{
    const url = `${this.apiUrl}/getOneCategory/${id}`;
    return this.http.get<CategoryDto>(url);
  }
}
