import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  { path: '', component:BodyComponent},
  { path: 'about', component:AboutComponent},
  {path: 'Blogs', component:BlogsComponent },
  {path: 'Login', component:LoginComponent }


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
