import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/category/update-category/update-category.component';
import { UpdateProductComponent } from './pages/product/update-product/update-product.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminLayoutComponent,
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    UpdateProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:DashboardComponent},
      {path:"dashboard", component:DashboardComponent},
      {path:"category", component:CategoryComponent},
      {path:"product", component:ProductComponent},

    ]),
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],

exports:[AdminLayoutComponent,CategoryComponent,DashboardComponent,ProductComponent,AddCategoryComponent,UpdateCategoryComponent,AddProductComponent,UpdateProductComponent],
})
export class AdminModule { }
