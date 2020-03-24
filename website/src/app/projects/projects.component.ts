import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects=[];
  constructor(private apiService: ApiService) {}
	ngOnInit() {
    this.getProjects();
  }

  getProjects(){
  	this.apiService.getProjects().subscribe((data: any[])=>{ 
			console.log(data);  
      this.projects = data;  
      console.log(this.projects);
    })    
  }

  deleteProject(id){
    this.apiService.deleteProject(id).subscribe((data: any[])=>{  
      console.log(data);    
      this.getProjects();
    })
  }
}
