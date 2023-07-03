import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { BooKDto } from 'src/app/models/book.dto';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit{

  books: BooKDto[] = [];
  currentPage: number = 1;
  pageSize: number = 10; // Nombre d'éléments par page
  totalItems: number = 0; // Nombre total d'éléments
  title:string;
  bookId:number= this.route.snapshot.params['id'];

  constructor(private router:Router, private bookService:BookService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getAllBook();
  }

  onMenu(){
    this.router.navigate(['/menu']);
  }    
  onClientList(){
    this.router.navigate(['allCustomer']);
  }
  onCategoryList(){
    this.router.navigate(['/allCategory']);
  }
  onLoanList(){
    this.router.navigate(['/allCategory']);
  }

  getAllBook(){
    this.bookService.getAllBook(this.currentPage, this.pageSize).subscribe((books) => {
      this.books = books;
    }, (error) => {
      // Une erreur s'est produite lors de la récupération des clients
      console.error(error);
    });
  }

  searchAllBookByTitle(){
    if(this.title){
    this.bookService.searchAllBookByTitle(this.title).subscribe((books)=>{
      this.books=books;
    }, (error)=>{
      console.log(error);
    })
  }else{
    this.getAllBook();
  }
  }
  confirmDelete(bookId:number){
    if(confirm("voulez vous vraiment supprimer ce livre?")){
      this.deleteBook(bookId);
    } 
  }

  deleteBook(bookId:number){
    this.bookService.deleteBook(bookId).subscribe(()=>{
      console.log('livre supprime avec success');
    }, (error)=>{
        console.log("echec de suppression", error);
    });
  }

}
