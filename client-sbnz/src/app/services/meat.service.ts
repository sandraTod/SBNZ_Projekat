import { Meat } from './../model/meat';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeatService {

  constructor(private http: HttpClient) { }

  getAllMeat():Observable<Meat[]>{
    return this.http.get<Meat[]>("http://localhost:8080/api/meat/getAll");
  }

  getMeats():Observable<Meat[]>{
    return this.http.get<Meat[]>("http://localhost:8080/api/meat/getMeats");
  }

  deleteMeat(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/meat/deleteMeat/"+id,{

        headers: headers
    });

  }

  updateIsConnected(id: number){
    const body= {};
    return this.http.patch<any>("http://localhost:8080/api/meat/isConnected/"+ id, body);
  }

  deleteConnection(id: number){
    const body = {};
    return this.http.patch<any>("http://localhost:8080/api/meat/deleteConnection/"+ id, body);
  }
}
