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


  deleteMeat(id:any){
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/meat/deleteMeat/"+id,{

        headers: headers
    });

  }


  addMeat(meat: Meat){
    let  newMeat = JSON.stringify(meat);
    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.post("http://localhost:8080/api/meat/addMeat",newMeat,
    {
      headers: headers
    });
  
   }
   
   updateMeat(updated: Meat){
    let meat  = JSON.stringify(updated);

    let headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
    return this.http.put("http://localhost:8080/api/meat/updateMeat",meat,
    {
         headers: headers

    });

  }
}
