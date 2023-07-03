import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { CategoryDto } from 'src/app/models/category.dto';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit{
  categorys:CategoryDto[];
  category:CategoryDto|null=null;
  id:number = this.route.snapshot.params['id'];
  label: string;

  constructor(private router:Router, private categoryService:CategoryService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getAllCategory();
  }

  onMenu(){
    this.router.navigate(['/menu']);
  }    
  onClientList(){
    this.router.navigate(['allCustomer']);
  }
  onBookList(){
    this.router.navigate(['/allBook'])
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe((categorys)=>{
      this.categorys=categorys
    }, (error)=>{
      console.log(error);
    });
  
  }

  searchCategoryByLabel(): void {
    if (this.label) {
      this.categoryService.getCategoryByLabel(this.label).subscribe((categorys)=>{
        this.categorys=categorys;
      }, (error)=>{
         console.log(error);  
      });
    } else {
      // Si le champ de recherche est vide, chargez toutes les catégories
      this.getAllCategory();
    }
  }

  confirmDelete(code:number){
    if(confirm("etes-sur de vouloir supprimer cette categorie?")){
      this.deleteCategory(code);
    }
  }
  deleteCategory(id:number){
    this.categoryService.deleteCategory(id).subscribe(()=>{
      console.log('categorie supprimee avec success');
    }, (error)=>{
        console.log("echec de suppression", error);
    });
  }

}
