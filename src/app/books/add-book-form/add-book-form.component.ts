import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooKDto } from 'src/app/models/book.dto';
import { CategoryService } from 'src/app/category/category.service';
import { CategoryDto } from 'src/app/models/category.dto';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';



@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit{

  bookForm: FormGroup;
  categorys:CategoryDto[];
  book:BooKDto;

  constructor(private bookService:BookService, private router:Router, private categoryService:CategoryService,
     private formBuilder: FormBuilder, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllCategory();
    this.initialisationFormulaire()
  }

  getAllCategory(){
     this.categoryService.getAllCategory().subscribe((categorys)=>{
      this.categorys=categorys;
    }, (error)=>{
      console.log('erreur de chargement', error);
    });
  }

  initialisationFormulaire(){
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      createdDate: ['',[Validators.required]],
      totalExamp: [''],
      author: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      categoryId: ['', Validators.required]
    });

  }

  addBook(){
    const bookDto = new BooKDto(
      this.bookForm.value['title'],
      this.bookForm.value['createdDate'],
      this.bookForm.value['totalExamp'],
      this.bookForm.value['author']
    )
    const categoryId = this.bookForm.value['categoryId'];
    const createdDate = new Date(bookDto.createdDate);

    if(createdDate < new Date()){
      this.bookService.addBook(bookDto, categoryId).subscribe((book:BooKDto)=>{
        console.log('livre enregistrement avec success', book);
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);
  
        dialogRef.afterClosed().subscribe(() => {
        });
        this.router.navigate(['/allBook']);
      }, (error)=>{
        console.log('echeck d\'enregistrement', error);
      });
    }else{
      alert("la date de creation doit etre inferieur ou egale a la date du jour");
    }
  }
}
