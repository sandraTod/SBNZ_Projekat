import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sauce } from '../model/sauce';

@Injectable({
  providedIn: 'root'
})
export class SauceService {

  constructor(private http: HttpClient) { }

  getAllSauces():Observable<Sauce[]>{
    return this.http.get<Sauce[]>("http://localhost:8080/api/sauce/getAll");
  }


  deleteSauce(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/sauce/deleteSauce/"+id,{

        headers: headers
    });

  }
  addSauce(sauce: Sauce){
    let  newSauce = JSON.stringify(sauce);
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post("http://localhost:8080/api/sauce/addSauce",newSauce,
    {
      headers: headers
    });
  
   }




}
