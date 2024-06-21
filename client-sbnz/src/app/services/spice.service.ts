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
  

  deleteSpice(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/spice/deleteSpice/"+id,{

        headers: headers
    });

  }

  addSpice(spice: Spice){
    let  newSpice = JSON.stringify(spice);
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post("http://localhost:8080/api/spice/addSpice",newSpice,
    {
      headers: headers
    });
  
   }


}
