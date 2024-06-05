import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sauce } from '../model/sauce';

@Injectable({
  providedIn: 'root'
})
export class SauceService {

  constructor(private http: HttpClient) { }

  getAllSauce():Observable<Sauce[]>{
    return this.http.get<Sauce[]>("http://localhost:8080/api/sauce/getAll");
  }

  getSauces():Observable<Sauce[]>{
    return this.http.get<Sauce[]>("http://localhost:8080/api/sauce/getSauces");
  }

  deleteSauce(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/sauce/deleteSauce/"+id,{

        headers: headers
    });

  }

  updateIsConnected(id: number){
    const body= {};
    return this.http.patch<any>("http://localhost:8080/api/sauce/isConnected/"+ id, body);
  }

  deleteConnection(id: number){
    const body = {};
    return this.http.patch<any>("http://localhost:8080/api/sauce/deleteConnection/"+ id, body);
  }




}
