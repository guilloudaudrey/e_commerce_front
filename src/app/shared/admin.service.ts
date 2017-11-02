import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Admin } from './Admin';

@Injectable()
export class AdminService {
  private urlApi:string = 'http://localhost:3000/admin';


  constructor(private http:HttpClient){}
  
  getAllAdmins():Observable<Admin[]>{
      return this.http.get<Admin[]>(this.urlApi);
  }
  
  addAdmin(user):Observable<Admin>{
      return this.http.post<Admin>(this.urlApi, user); 
  }

  getAdminById(id:number):Observable<Admin> {
    return this.http.get<Admin>(this.urlApi+'/'+id);
  }

  removeAdmin(id):Observable<any>{
      return this.http.delete(this.urlApi+'/'+id);
  }

  updateAdmin(id:number, user:Admin):Observable<Admin> {
    return this.http.patch<Admin>(this.urlApi+'/'+id,
    user);
  }

}
