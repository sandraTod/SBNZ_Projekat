import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listOfUsers!: User[];

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(data => {this.listOfUsers = data});
  }

  addUser(){
    var popup = this.dialog.open(AddUserComponent,{

      width: '50%',
      height: '500px',

    });
    popup.afterClosed().subscribe(newUser =>{

       this.userService.getAllUsers().subscribe(data => {this.listOfUsers = data});

    });
  }

  userDetails(user:User){
    var popup = this.dialog.open(UserDetailsComponent,{

      width: '50%',
      height: '500px',
      data:{
        user: user
      } 

    });

  }

  deletePopup(id:any){

    var deletePopup = this.dialog.open(DeleteEntityComponent,{
      width: '28%',
      height: '180px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){
        this.userService.deleteUser(id).subscribe();

        const index = this.listOfUsers.findIndex(i => i.id == id);
        this.listOfUsers.splice(index, 1);
      }

    });
  }

}
