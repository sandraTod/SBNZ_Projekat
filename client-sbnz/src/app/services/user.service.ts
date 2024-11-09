import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public authenticate(username: string, password: string) {
    let authenticationRequest = { username: username, password: password };
    let params = JSON.stringify(authenticationRequest);
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log(headers);
    return this.http.post("http://localhost:8080/auth", params,
      {
        headers: headers
      });
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/api/user/getAll");
  }

  deleteUser(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/user/deleteUser/"+id,{

        headers: headers
    });

  }

  addUser(user: User){
    let  newUser = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post("http://localhost:8080/api/user/addUser",newUser,
    {
      headers: headers
    });
  
  }

  updateUser(updated: User){
    let user  = JSON.stringify(updated);

    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/user/updateUser",user,
    {
         headers: headers

    });

  }

}
