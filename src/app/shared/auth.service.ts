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

  constructor(private http:HttpClient) { 
    this.user.next(JSON.parse(localStorage.getItem('user')));
  }


  login(username:string,pass:string):Observable<boolean> {
    
    return this.http.get(this.urlAPI+'/authenticate')
    .map((users) => {
   
        localStorage.setItem('user', JSON.stringify(users[0]));
        this.user.next(users[0]);
        return true;

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