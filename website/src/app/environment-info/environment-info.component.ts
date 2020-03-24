import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-environment-info',
  templateUrl: './environment-info.component.html',
  styleUrls: ['./environment-info.component.css']
})
export class EnvironmentInfoComponent implements OnInit {

  environment={};
  id=0;
  editMode=false;
  startServ=false;
  tags=[];
  databases=[];
  variable="";
  requests=[];
  seeEvents=false;
  events=[];
  cookievalue='';
  projectName='';
 

  constructor(private apiService: ApiService, private route: ActivatedRoute,  private cookieService: CookieService) { 
    this.route.params
    .subscribe( params => {
      console.log(params);
    this.id=params.id});

    this.cookievalue = this.cookieService.get('User');
  }
  
	ngOnInit() {
		this.apiService.getEnvironmentById(this.id).subscribe((data: any[])=>{  
  		console.log(data);  
      this.environment = data[0];  
      this.tags=this.environment["tags"]; 
    this.databases=this.environment["databases"]; 
  
    this.apiService.getOperationsOfEnvironment(this.environment["id"]).subscribe((data: any[])=>{ 
      console.log("Requests");
      console.log(data);
      this.requests=data;  
      this.requests=this.requests.reverse();
      console.log(this.requests); 
    
      this.apiService.getProjectById(this.environment["projectId"]).subscribe((data: any[])=>{ 
        this.projectName=data["name"];
      })
  
  })
    
    })
  
  }

  edit(){
    this.editMode=true;
  }

  save(name){
    this.editMode=false;
    console.log("Je change le projet : "+name+" a "+this.variable);
    this.apiService.updateEnvironmentName(name,this.variable)
    .subscribe((data: any[])=>{  
      this.environment=data;  
    })
  }

  startServices(name){
    this.apiService.operation(name,"start_services")
    .subscribe((data: any[])=>{  
       
    })
    this.startServ=true;
  }

  refresh(){
    location.reload();
  }

  displayEvents(events){
this.events=events;
    this.seeEvents=true;
   
  }

  closeEvents(){
    this.seeEvents=false;
  }

}
