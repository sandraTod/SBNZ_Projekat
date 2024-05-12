import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LoggedUtils } from '../utils/loggedUtils';
import { Observable } from 'rxjs';



@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `${LoggedUtils.getToken()}`
      }
  
    });
    return next.handle(request);
  }
}