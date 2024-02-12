import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  updateCategoryForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(0)
  });

  nameValid: string = '';
  id: number | undefined;

  constructor(private categoryService: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngonInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.categoryService.get(this.id).subscribe(x=>{
      this.updateCategoryForm.get('name')?.setValue(x.name),
      this.updateCategoryForm.get('id')?.setValue(x.id)  
    })
  }

  updateCategory(){
    this.categoryService.update(this.updateCategoryForm.value as Category).subscribe({
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
        alert('Güncelleme Başarılı')
        this.router.navigateByUrl('/admin/category')
      }
    })
  }
}
