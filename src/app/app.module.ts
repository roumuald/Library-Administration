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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { EmailModalComponent } from './emailSender/email-modal/email-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { EmailService } from './emailSender/email.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
    EmailModalComponent,
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    LoanModule,
    CategoryModule,
    BookModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [
    CustomerService,
    BookService,
    LoanService,
    CategoryService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
