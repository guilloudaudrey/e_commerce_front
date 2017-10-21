
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';
import { Injectable } from '@angular/core';
import { User } from './User';


@Injectable()
export class ProductService {
  private urlApi:string = 'http://localhost:3000/product';

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi);
  }

  addProduct(product):Observable<Product>{
    return this.http.post<Product>(this.urlApi, product);
  }

  getProductById(id:number):Observable<Product> {
      return this.http.get<Product>(this.urlApi+'/'+id);
}

  removeProduct(id):Observable<any>{
      return this.http.delete(this.urlApi+'/'+id);
  }
}