import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryDto } from 'src/app/models/category.dto';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent {

  categoryForm: FormGroup;
  categoryDto: CategoryDto = new CategoryDto();

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder){
    this.categoryForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{1,25}$")]],
      label: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]]
    });
  }
  
  addCategory(): void {
    if (this.categoryForm.invalid) {
      // Gérer le cas où le formulaire est invalide
      return
    }
    this.categoryService.addCategory(this.categoryDto).subscribe(
      (newCategory:CategoryDto)=>{
        console.log('categorie ajouter :', newCategory);
      }, (error)=>{
        console.log('erreur lors de l\'ajout de categorie', error);
      });
  }

}
