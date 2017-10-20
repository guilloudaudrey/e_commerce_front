import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './Category';

@Injectable()
export class CatService {
  private urlApi:string = 'http://localhost:3000/category';

  constructor(private http:HttpClient) { }

  getAllCats():Observable<Category[]>{
    return this.http.get<Category[]>(this.urlApi);
  }

  addCat(brand):Observable<Category>{
    return this.http.post<Category>(this.urlApi, brand);
  }

  getCatById(id:number):Observable<Category> {
    return this.http.get<Category>(this.urlApi+'/'+id);
}
}
