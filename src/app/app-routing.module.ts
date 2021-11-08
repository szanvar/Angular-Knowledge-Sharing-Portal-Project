// File useed for routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the components required for the routing
import { ProjectsComponent } from './projects/projects.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Routes array for routing
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'aboutus', component: AboutusComponent },
  
  { path: 'projects', component: ProjectsComponent, children: [
      { path: '', component: ProjectStartComponent }, // Wildcard routing
      { path: 'new', component: ProjectEditComponent },
      { path: ':id', component: ProjectDetailComponent },
      { path: ':id/edit', component: ProjectEditComponent },
  ] },

  { path: 'book-list', component: BookListComponent },
  { path: 'page', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

}
