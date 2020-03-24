import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectInfoComponent } from '../app/project-info/project-info.component';
import { DefaultLayoutComponent } from './containers';
import { EnvironmentsComponent} from './environments/environments.component';
import { ProjectsComponent } from './projects/projects.component'
import {EnvironmentInfoComponent} from '../app/environment-info/environment-info.component';
import {ProjectEnvironmentsComponent} from '../app/project-environments/project-environments.component';
import {LoginComponent} from '../app/login/login.component';
import {HomeComponent} from '../app/home/home.component';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  }, 
  
  {
    path: '',
    component: DefaultLayoutComponent,
    children: 
    [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        } 
      },

      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Projects Page',
        },            
      },

      {
        path: 'projects/:id',
        component: ProjectInfoComponent,
        data: {
          title: 'Project Info Page',
        }
      },
      {
        path: 'environments',
        component: EnvironmentsComponent,
        data: {
          title: 'Environments Page'
        }
      },
      {
        path: 'projects/:id/environment',
        component: ProjectEnvironmentsComponent,
        data: {
          title: 'Environments of the Project'
        }
      },
      {
        path: 'environments/:id',
        component: EnvironmentInfoComponent,
        data: {
          title: 'Environment Info Page'
        }
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
