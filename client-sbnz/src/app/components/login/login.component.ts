import { LoggedUtils } from './../../utils/loggedUtils';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username: string = "";
  password: string = "";
  loginError = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.userService.authenticate(this.username, this.password).pipe(
      catchError((error) => {
      console.error('Login error:', error); // Prikazuje celu grešku u konzoli

      if (error.status === 401) {
        this.loginError = 'Pogrešno korisničko ime ili lozinka!';
      }
      
      return throwError(() => error); // Rethrow error for further handling
    })
  ).subscribe(
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
