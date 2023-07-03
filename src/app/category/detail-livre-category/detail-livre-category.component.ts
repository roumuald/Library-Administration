import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { BooKDto } from 'src/app/models/book.dto';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'src/app/models/category.dto';

@Component({
  selector: 'app-detail-livre-category',
  templateUrl: './detail-livre-category.component.html',
  styleUrls: ['./detail-livre-category.component.css']
})
export class DetailLivreCategoryComponent implements OnInit{

  books:BooKDto[];
  category:CategoryDto;

  constructor(private categoryService:CategoryService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getBookByCategory(id);
    this.getOnecustomer(id);
  }

  getBookByCategory(id:number){
    this.categoryService.getBookByCategory(id).subscribe((books)=>{
      this.books=books;
    }, (error)=>{
      console.log(error);
    } )
  }
  getOnecustomer(id:number){
    this.categoryService.getOneCategory(id).subscribe((category)=>{
      this.category=category;
    }, (error)=>{
      console.log(error);
    })
  }

}
