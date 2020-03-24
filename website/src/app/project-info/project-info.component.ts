import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  editMode=false;
  variable="";
  project={};
  id=0;
  showEnv=false;
  environments={};

  constructor(private apiService: ApiService, private route: ActivatedRoute) { 
    this.route.params
      .subscribe(params => {
        console.log(params);
        console.log("fdgdfhh");
        this.id = params.id
      });
  }
  
	ngOnInit() {
		this.apiService.getProjectById(this.id).subscribe((data: any[])=>{  
      console.log("FDGG");
  		console.log(data);  
      this.project = data; 
    })
  }

  edit(){
    this.editMode=true;
  }

  save(name){
    this.editMode=false;
    console.log("Je change le projet : "+name+" a "+this.variable);
    this.apiService.updateProjectName(name,this.variable)
    .subscribe((data: any[])=>{  
      this.project=data;  
    })
  }

  showEnvironments(id){
  
    this.apiService.getEnvironmentsOfProject(id)
    .subscribe((data: any[])=>{  
      this.environments=data; 
    })
    this.showEnv=true;
  }

  hideEnv(){
    this.showEnv=false;
  }
}
