import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailLivreCategoryComponent } from './detail-livre-category/detail-livre-category.component';
import { MatIconModule } from '@angular/material/icon';

// declaration de differentes routes
const routeCategory: Routes =[
  {path: 'updateCategory/:id', component: EditCategoryComponent },
  {path: 'allCategory', component: ListCategoryComponent},
  {path: 'addCategory', component: AddCategoryFormComponent},
  {path: 'allBookByCategory/:id', component: DetailLivreCategoryComponent}
  // {path: 'allCategoryByLabel/:label', component:ListCategoryComponent}
  //{path: 'detailCustomer/:id', component: DetailCustomerComponent} 
];

@NgModule({
  declarations: [
    ListCategoryComponent,
    AddCategoryFormComponent,
    EditCategoryComponent,
    DetailLivreCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeCategory),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class CategoryModule { }
