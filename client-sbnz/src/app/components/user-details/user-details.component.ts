import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: User;
  isSame: boolean = false;
  newPass = "";
  repeatPass = "";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<UserComponent>,
              private userService: UserService) { }

  ngOnInit(): void {

    this.user = this.data.user;

  }

  comparePass(){

    if(this.newPass == this.repeatPass){
      this.isSame = true;

      this.user.password = this.newPass;
    }

    else{
      this.isSame = false;
    }
    
    console.log(this.newPass+ " "+ this.repeatPass);
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe(data => {console.log(data)});
    this.ref.close();
  }

}
