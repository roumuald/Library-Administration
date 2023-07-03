import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customers/customer.module';
import { LoanModule } from './loan/loan.module';
import { CategoryModule } from './category/category.module';
import { BookModule } from './books/book.module';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerService } from './customers/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './books/book.service';
import { LoanService } from './loan/loan.service';
import {CategoryService} from './category/category.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    LoanModule,
    CategoryModule,
    BookModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CustomerService,
    BookService,
    LoanService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
