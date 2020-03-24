import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    SERVER_URL = "http://localhost:8081/authorize";
  
    constructor(private httpClient: HttpClient, public router: Router) { }
    public getToken(UserPassJson){
      return this.httpClient.post(this.SERVER_URL,UserPassJson,{responseType: 'text', observe: 'response' as 'response'});
    }
  } 
