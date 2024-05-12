import { HttpClient } from '@angular/common/http';
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

}

