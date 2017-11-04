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
  token:string;


  constructor(private http:HttpClient) { 
  this.init()
  //this.user.next(JSON.parse(localStorage.getItem('token')));
  }

  init() {
    console.log(localStorage)
    this.token = localStorage.getItem('token');
    if(this.token) {
        this.getByToken(this.token).subscribe((user) =>{
          this.user.next(user);
        });
    } 
  }

  login(pseudo):Observable<boolean> {
    
    return this.http.post<User>(this.urlAPI+'/authenticate', pseudo)
    .map((user) => {
      if(user) {
        localStorage.setItem('token', user.token);
        this.user.next(user);
        console.log(localStorage)
        return true;
      }
      return false;
    });
  }

  logout():void {
    localStorage.removeItem('token');

    this.user.next(null);
  }

  // getByPseudo(pseudo:string):Observable<User[]> {
  //   return this.http.get<User[]>(this.urlAPI+'/'+pseudo);
  // }

  getByToken(token:string):Observable<User> {
    return this.http.post<User>(this.urlAPI+'/token',{token:token})
    .map((users) => {
      if(users) {
        return users;
      }
      return null
    });
    
  }



}