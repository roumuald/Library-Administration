import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// declaration de differentes routes
const routeBook: Routes =[
  {path: 'updateBook/:id', component: EditBookComponent},
  {path: 'allBook', component: ListBookComponent},
  {path: 'detailBook/:id', component: DetailBookComponent },
  {path: 'addBook', component: AddBookFormComponent } 
];


@NgModule({
  declarations: [
    EditBookComponent,
    ListBookComponent,
    DetailBookComponent,
    AddBookFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeBook),
    FormsModule
  ],
})
export class BookModule { }
