import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser: User = {
    username: '',
    password: '',
    name: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    phoneNum: '',
    role: "USER"

  }
  isSame: boolean = false;
  repeatPass = "";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<UserComponent>,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  comparePass(){

    if(this.newUser.password == this.repeatPass){
      this.isSame = true;
    }

    else{
      this.isSame = false;
    }
    console.log(this.newUser.password+ " "+ this.repeatPass);
    console.log(this.isSame);

  }

  addUser(){
    
    this.userService.addUser(this.newUser).subscribe();
    this.ref.close(this.newUser);
  }

}
