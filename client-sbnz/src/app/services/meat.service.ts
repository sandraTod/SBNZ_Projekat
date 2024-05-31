import { Meat } from './../model/meat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  updateIsConnected(id: number){
    const body= {};
    return this.http.patch<any>("http://localhost:8080/api/meat/isConnected/"+ id, body);
  }

  deleteConnection(id: number){
    const body = {};
    return this.http.patch<any>("http://localhost:8080/api/meat/deleteConnection/"+ id, body);
  }
}
