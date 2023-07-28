import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CategoryDto } from 'src/app/models/category.dto';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{

  category:CategoryDto//= new CategoryDto()

  ngOnInit(): void {
    
  }

  constructor(private categoryService:CategoryService){}

  updateCategory(categoryId: number): void {
    this.categoryService.updateCategory(categoryId, this.category).subscribe(
      updatedCategory => {
        // La catégorie a été mise à jour avec succès
        // Vous pouvez effectuer des actions supplémentaires ici si nécessaire
        console.log('Catégorie mise à jour :', updatedCategory);
      },
      error => {
        // Gérez l'erreur ici si la mise à jour échoue
        console.error('Erreur lors de la mise à jour de la catégorie :', error);
      }
    );
  }

}
