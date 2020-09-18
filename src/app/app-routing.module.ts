import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent } from './courses/courses.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import{DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
{
  path:'courses',
  component:CoursesComponent
},
  {
    path:'detail/:id',
    component:CourseDetailComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
