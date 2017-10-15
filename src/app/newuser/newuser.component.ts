import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from '../shared/user.service';
import 'rxjs/add/operator/toPromise';
import * as sha1 from 'js-sha1';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent implements OnInit {
  pseudo:string;
  email:string;
  mdp:string;

  tableau = [];

  constructor(private userService:UserService) {   
  }

  ngOnInit() { 
    this.userService.getAllUsers().then((users) => this.tableau = users);
  }

addUser(pseudo, email, mdp){
  this.userService.addUser({pseudo:pseudo, email:email, mdp: sha1(mdp), dateinscription:new Date}).then((user) => this.tableau.push(user));
console.log
}

}
