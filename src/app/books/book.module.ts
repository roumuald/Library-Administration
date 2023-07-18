import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// declaration de differentes routes
const routeBook: Routes =[
  {path: 'addBook', component: AddBookFormComponent },
  {path: 'updateBook/:id', component: EditBookComponent},
  {path: 'allBook', component: ListBookComponent}
];


@NgModule({
  declarations: [
    EditBookComponent,
    ListBookComponent,
    AddBookFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeBook),
    FormsModule,
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class BookModule { }
