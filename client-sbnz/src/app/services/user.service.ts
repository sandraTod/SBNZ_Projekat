import { Filter } from './../model/filter';
import { Recipe } from './../model/recipe';
import { Answers } from './../model/answers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Wine } from '../model/wine';

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
  sendAnswers(answers:Answers){
    let aswersBack = JSON.stringify(answers);
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post<Wine>("http://localhost:8080/api/drools/findWine",answers,
    {
      headers: headers
    });

  }
  wineRanking(answers: Answers){
    let answersBack = JSON.stringify(answers);
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post<Wine[]>("http://localhost:8080/api/drools/findWineList",answersBack,
    {
      headers: headers
    });


  }
  findReciperByWine(wineName: String){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post<Recipe[]>("http://localhost:8080/api/drools/findRecipeList",wineName,
    {
      headers: headers
    });


  }
  filterWines(criteria: Filter){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post<Wine[]>("http://localhost:8080/api/drools/filterWines",criteria,
    {
      headers: headers
    });
  }

}
