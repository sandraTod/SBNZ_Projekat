import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wine } from '../model/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  getAllWine():Observable<Wine[]> {
    return this.http.get<Wine[]>("http://localhost:8080/api/wine/getAll");
  }

  deleteWine(id:any){
    console.log('Usla'+ id );
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/wine/deleteWine/"+id,{

        headers: headers
    });

  }

  updateWine(wineUpdate: any){
    let wine  = JSON.stringify(wineUpdate); 
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/wine/updateWine",wine,
    {
         headers: headers

    });
 }

}

