import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {NewuserComponent} from '../newuser/newuser.component'
import { Observable } from 'rxjs/Observable';
import { User } from './User';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private urlApi:string = 'http://localhost:3000/user';
  user:BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http:HttpClient){}
  
  getAllUsers():Observable<NewuserComponent[]>{
      return this.http.get<NewuserComponent[]>(this.urlApi);
  }
  
  addUser(user):Observable<User>{
      return this.http.post<User>(this.urlApi, user); 
  }

  getUserById(id:number):Observable<User> {
    return this.http.get<User>(this.urlApi+'/'+id);
  }

  removeUser(id):Observable<any>{
      return this.http.delete(this.urlApi+'/'+id);
  }

  updateUser(id:number, user:User):Observable<User> {
    return this.http.patch<User>(this.urlApi+'/'+id,
    user);
  }

}
