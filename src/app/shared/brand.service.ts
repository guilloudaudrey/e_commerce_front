import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewbrandComponent } from '../newbrand/newbrand.component';
import { Observable } from 'rxjs/Observable';
import { Brand } from './Brand'

@Injectable()
export class BrandService {
  private urlApi:string = 'http://localhost:3000/brand';

  constructor(private http:HttpClient) { }

  getAllBrands():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.urlApi);
  }

  addBrand(brand):Observable<Brand>{
    return this.http.post<Brand>(this.urlApi, brand);
  }

  getBrandById(id:number):Observable<Brand> {
    return this.http.get<Brand>(this.urlApi+'/'+id);
}

}
