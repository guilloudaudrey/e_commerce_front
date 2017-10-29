import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { User } from './User';

@Injectable()
export class AuthService {
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  urlAPI:string = 'http://localhost:3000/user';

  ngOnInit():void{
    
   }

  constructor(private http:HttpClient) { 
    this.user.next(JSON.parse(localStorage.getItem('user')));
  }


  login(pseudo):Observable<boolean> {
    
    return this.http.post<User>(this.urlAPI+'/authenticate', pseudo)
    .map((user) => {
      if(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user.next(user);
        console.log(localStorage)
        return true;
      }
      return false;
    });
  }

  logout():void {
    localStorage.removeItem('user');
    this.user.next(null);
  }

  // getByPseudo(pseudo:string):Observable<User[]> {
  //   return this.http.get<User[]>(this.urlAPI+'/'+pseudo);
  // }

  // getByToken(token:string):Observable<User> {
  //   return this.http.get<User[]>(this.urlAPI+'?token='+token)
  //   .map((users) => {
  //     if(users.length === 1) {
  //       return users[0];
  //     }
  //     return null
  //   });
    
  // }



}