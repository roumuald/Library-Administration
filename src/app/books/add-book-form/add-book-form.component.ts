import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooKDto } from 'src/app/models/book.dto';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit{

  bookForm : FormGroup

  endDate: Date;
  title:string;
  totalExamp:number;
  author:string;
  isAvailable:boolean=false;

  constructor(private bookService:BookService, private router:Router, private route:ActivatedRoute ){}

  ngOnInit(): void {
    
  }
  addBook(form : NgForm){
    const bookDto = new BooKDto(
      this.bookForm.value['title'],
      this.bookForm.value['totalExamp'],
      this.bookForm.value['author'],
      this.bookForm.value['isAvailable'],
      this.bookForm.value['createdDate']
    )

    console.log(form.value)
  }

  

}
