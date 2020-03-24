import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-environments',
  templateUrl: './project-environments.component.html',
  styleUrls: ['./project-environments.component.css']
})
export class ProjectEnvironmentsComponent implements OnInit {
  environments=[];
  id=0;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.route.params
    .subscribe( params => {
      console.log(params);
    this.id=params.id});
  }

  ngOnInit(): void {
    this.getEnvironments();
  }
  
  getEnvironments(){
  	this.apiService.getEnvironmentsOfProject(this.id).subscribe((data: any[])=>{  
			console.log(data);  
      this.environments = data;  
      console.log(this.environments);
    })    
  }
}


