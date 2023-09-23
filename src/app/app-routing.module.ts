import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CreateStudentsComponent } from './pages/create-students/create-students.component';

const routes: Routes = [
  {path:'',component:HomePageComponent,title:'Home Page'},
  {path:'about',component:AboutPageComponent,title:'About Us'},
  {path:'contact',component:ContactPageComponent,title:'Contact Us'},
  {path:'students/create',component:CreateStudentsComponent,title:'Contact Us'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
