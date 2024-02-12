import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient, @Inject('BASE_API_URL') private baseUrl:string) { }

  get(id:number){
    return this.http.get<Category>(`${this.baseUrl}/api/Categories/${id}`)
  }

  getAll(){
    return this.http.get<Category[]>(`${this.baseUrl}/api/Categories`)
  }

  add(category:Category){
    return this.http.post<Response>(`${this.baseUrl}/api/Categories`, category)
  }

  update(category:Category){
    return this.http.put<Response>(`${this.baseUrl}/api/Categories/${category.id}`, category, {observe: 'response'})
  }
  
  delete(id:number){
    return this.http.delete<Response>(`${this.baseUrl}/api/Categories/${id}`, {observe:'response'})
  }
}
