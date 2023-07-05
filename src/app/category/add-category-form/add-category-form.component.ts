import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryDto } from 'src/app/models/category.dto';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent implements OnInit{
/**
 * FormGroup est un objet qui fait reference au formulaire au niveau du template
 * FormBuilder est une classe qui permet de creer des formulaire plus facilement avec agular reactive
 */
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private router:Router){}
  ngOnInit(): void {
    this.initialisationFormulaire();
  }

  initialisationFormulaire(){
    // ajout de control qui seront dans le formulaire
    this.categoryForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      label: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]]
    });
  }
  
  addCategory(): void {
    const categoryDto = new CategoryDto(this.categoryForm.value['code'], this.categoryForm.value['label']);
    this.categoryService.addCategory(categoryDto ).subscribe((newCategory:CategoryDto)=>
      {
        console.log('categorie ajouter :', newCategory);
        this.router.navigate(['/allCategory']);
      }, 
      (error)=>{
        console.log('erreur lors de l\'ajout de categorie', error);
      });
  }
  
}
