import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {  HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
cookievalue = "";
SERVER_URL = "http://localhost:8081/";



  constructor(private httpClient: HttpClient,  private cookieService: CookieService) { }
  
  public operation(envName,opName){
    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    console.log("Cookie Value");
    console.log(headers.get('Authorization')); 
    return this.httpClient.post(this.SERVER_URL+"environments/"+envName+"/operations/"+opName,"message",{headers: headers});  
  }

  public getOperations(id){
    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    console.log("Cookie Value");
    console.log(headers.get('Authorization')); 
    return this.httpClient.get(this.SERVER_URL+"requests/"+id,{headers: headers});  
  }


  public getOperationsOfEnvironment(name){
    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    console.log("Cookie Value");
    console.log(headers.get('Authorization')); 
    return this.httpClient.get(this.SERVER_URL+"requests/environments/"+name,{headers: headers});  
  }

  public get(){  
		return this.httpClient.get(this.SERVER_URL+"roles");  
  }  
  
  public getUsers(){
    return this.httpClient.get(this.SERVER_URL+"users"); 
  }



  public getProjectById(id){
    this.cookievalue = this.cookieService.get('Token');
    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    console.log("Headers Kwest");
    console.log(headers.get('Authorization')); 
    return this.httpClient.get(this.SERVER_URL+"projects/"+id, {headers: headers}); 
  }
  

  public getProjects(){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    console.log("Headers Kwest")
    console.log(headers.get('Authorization'));
    return this.httpClient.get(this.SERVER_URL+"projects",{headers: headers});
  }

  public deleteProject(id ){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    return this.httpClient.delete(this.SERVER_URL+"projects/"+id,{headers: headers});
  }


  public updateProjectName(id,name){
    console.log("UPDATE PROJECT NAME");
    console.log("la valeur du token");
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));
    console.log("la valeur de l'ancien nom  :"+ id);
    console.log("la valeur du nouveau nom :"+name);


    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    headers.append('Content-Type', 'application/json');
    console.log("Calling :"+this.SERVER_URL+"projects/"+id);
    return this.httpClient.patch(this.SERVER_URL+"projects/"+id,name,{ headers: headers});
  }


  public getEnvironments(){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    return this.httpClient.get(this.SERVER_URL+"environments",{headers: headers}); 
  }

  public deleteEnvironment(id){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    return this.httpClient.delete(this.SERVER_URL+"environments/"+id,{headers: headers});
  }
  
  public getEnvironmentById(id){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    return this.httpClient.get(this.SERVER_URL+"environments/"+id,{headers: headers}); 
  }

  public updateEnvironmentName(id,name){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    headers.append('Content-Type', 'application/json');
    return this.httpClient.patch(this.SERVER_URL+"environments/"+id,name,{headers: headers});
  }

  public getEnvironmentsOfProject(id){
    this.cookievalue = this.cookieService.get('Token');
    console.log(this.cookieService.get('Token'));

    let headers = new HttpHeaders().append('Authorization', this.cookievalue);
    return this.httpClient.get(this.SERVER_URL+"projects/"+id+"/environments",{headers: headers}); 
  }




}