import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spice } from '../model/spice';

@Injectable({
  providedIn: 'root'
})
export class SpiceService {

  constructor(private http: HttpClient) { }

  getAllSpices():Observable<Spice[]>{
    return this.http.get<Spice[]>("http://localhost:8080/api/spice/getAll");
  }

  getSpices():Observable<Spice[]>{
    return this.http.get<Spice[]>("http://localhost:8080/api/spice/getSpices");
  }

  updateIsConnected(id: number){
    const body= {};
    return this.http.patch<any>("http://localhost:8080/api/spice/isConnected/"+ id, body);
  }

  deleteConnection(id: number){
    const body = {};
    return this.http.patch<any>("http://localhost:8080/api/spice/deleteConnection/"+ id, body);
  }

  deleteSpice(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/spice/deleteSpice/"+id,{

        headers: headers
    });

  }


}
