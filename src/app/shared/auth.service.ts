import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'ngx-auth';
import { User } from './User';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  urlapi:string = 'http://localhost:3000/user'

  constructor(private http:HttpClient) { 
    this.user.next(JSON.parse(localStorage.getItem('user')));
  }

ngOnInit():void{ }

login(username:string, password:string):Observable<boolean>{
  return this.http.get<User[]>(this.urlapi+'?pseudo='+username+'&mdp='+password)
  .map((users)=>{
    if(users.length === 1){
      localStorage.setItem('user', JSON.stringify(users[0]));
    this.user.next(users[0]);
    return true;
  }
  return false;
  })
}

logout():void{
  this.user.next(null);
}
}
