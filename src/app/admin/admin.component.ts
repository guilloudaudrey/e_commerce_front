import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Admin } from '../shared/Admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }
  
  addAdmin(){
    this.adminService.addAdmin(new Admin())
  }

}
