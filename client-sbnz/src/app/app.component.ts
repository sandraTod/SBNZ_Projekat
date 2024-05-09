import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUtils } from './utils/loggedUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-sbnz';


  constructor(private router : Router){}

  isLoggedIn(){
    return !LoggedUtils.isEmpty();
  }

  getRole(){
    return LoggedUtils.getRole();
  }

  logout(){

    localStorage.removeItem("loggedUser");
    this.router.navigate(['/login']);
  }



}
