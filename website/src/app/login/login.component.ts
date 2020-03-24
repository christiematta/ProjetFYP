import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  UserPassJson: any={}
  authenticated;
  cookieValue = 'UNKNOWN';
userValue='UNKNOWN';

  constructor(private authService : AuthService, public router: Router, private cookieService: CookieService) { }
  ngOnInit(): void {
    console.log(this.cookieValue);
  } 
  LoginFunction(username,password){
        this.UserPassJson = {
        "username":username,
        "password":password
      }

      this.authService.getToken(this.UserPassJson).subscribe((res: HttpResponse<any>) =>
      {
    console.log(res.status);
    console.log(res);

        if(res.status == 200){
      this.cookieService.set('Token',res.headers.get('Authorization'));
    this.cookieService.set("User",username);
        this.cookieValue=this.cookieService.get('Token');
  this.userValue=this.cookieService.get("User");
          this.router.navigate(['/home']);
        } 
      
        console.log(this.cookieValue);
  console.log("User Value");
  console.log(this.userValue);
        });
    }
  } 