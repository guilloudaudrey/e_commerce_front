import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from '../shared/user.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {
  nom:string;
  prenom:string;
  email:string;
  mdp:string;

  tableau = [];

  constructor(private userService:UserService) {   
  }

  ngOnInit() { 
    this.userService.getAllUsers().then((users) => this.tableau = users);
  }

  // getAllPosts() {
  //   return this.http.get('localhost/')
  //     .map(res => res.json());
  // }

}
