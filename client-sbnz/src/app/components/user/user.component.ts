import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listOfUsers!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(data => {this.listOfUsers = data});
  }

  addUser(){}

  deletePopup(id:any){}

}
