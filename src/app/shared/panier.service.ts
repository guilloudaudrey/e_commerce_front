import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Basket } from './Basket';

@Injectable()
export class PanierService {
  private urlApi:string = 'http://localhost:3000/basket';
  
    constructor(private http:HttpClient) { }
  
    getAllBaskets():Observable<Basket[]>{
      return this.http.get<Basket[]>(this.urlApi);
    }
  
    addBasket(basket):Observable<Basket>{
      // console.log('ici');
      // console.log(basket);
      // console.log('http://localhost:3000/basket', this.urlApi);
      // console.log('this.http', this.http);
      // console.log('this.http.post', this.http.post);
      // console.log('this', this);
      return this.http.post<Basket>(this.urlApi, basket);
    }
  }