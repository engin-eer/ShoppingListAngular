import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  AddCategoryForm = new FormGroup({
    name: new FormControl('')
  });
  
  nameValid:string='';

  constructor(private categoryService:CategoryService, private router:Router){

  }

  addCategory(){
    this.categoryService.add(this.AddCategoryForm.value as Category).subscribe({
      next:(x)=>{
        console.log(x.body);
        console.log(x.headers)
      },
      error:(e:any)=>{
        if(e.status==400)
        {
          e.error=JSON.parse(e.error); // json
          this.nameValid = e.error.errors.Name!= null? e.error.errors.Name[0] : '';
        }
        if (e.status==404) {
          this.nameValid = ''
          alert('Bu isimde kategori var')
        }
      },
      complete:()=>{
        alert('Kayıt Başarılı')
        this.router.navigateByUrl('/admin/category')
      }
    })
  }
}
