import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule,} from '@coreui/angular';
import { AppRoutingModule } from './app.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { ProjectsComponent } from './projects/projects.component';
import { EnvironmentInfoComponent } from './environment-info/environment-info.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ProjectEnvironmentsComponent } from './project-environments/project-environments.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { CookieService } from 'ngx-cookie-service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BreadcrumbModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ProjectInfoComponent,
    EnvironmentsComponent,
    ProjectsComponent,
    EnvironmentInfoComponent,
    LoginComponent,
    ProjectEnvironmentsComponent,
    HomeComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }, CookieService],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
