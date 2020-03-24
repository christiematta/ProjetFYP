import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})

export class EnvironmentsComponent implements OnInit {
  environments=[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getEnvironments();
  }
  getEnvironments(){
  	this.apiService.getEnvironments().subscribe((data: any[])=>{  
			console.log(data);  
      this.environments = data;  
      console.log(this.environments);
    })    
  }

  deleteEnvironment(id){
    this.apiService.deleteEnvironment(id).subscribe((data: any[])=>{  
      console.log(data);
      this.getEnvironments();    
    })
  }
}














