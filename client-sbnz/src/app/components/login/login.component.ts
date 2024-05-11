import { LoggedUtils } from './../../utils/loggedUtils';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username: string = "";
  password: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.userService.authenticate(this.username, this.password).subscribe(
     data => {
      console.log(data)
      localStorage.setItem("loggedUser",JSON.stringify(data));

      if(LoggedUtils.getRole() =='SYSTEM_ADMIN'){
        this.router.navigate(['/adminPage'])
      }
      else
      {
        this.router.navigate(['userPage'])

      }


      

     
     } );
  }


}
