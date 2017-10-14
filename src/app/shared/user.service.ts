import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {NewuserComponent} from '../newuser/newuser.component'

@Injectable()
export class UserService {
  private urlApi:string = 'http://localhost:3000/user';

  constructor(private http:HttpClient){}
  
  getAllUsers():Promise<NewuserComponent[]>{
      return this.http.get<NewuserComponent[]>(this.urlApi).toPromise();
  }
  
  addUser(user):Promise<NewuserComponent>{
      
      return this.http.post<NewuserComponent>(this.urlApi, user).toPromise(); 
  ;
  }
  
//   removeTodo(user:NewuserComponent):Promise<any>{
//       return this.http.delete(this.urlApi+'/'+user.id).toPromise();
//   }
}
