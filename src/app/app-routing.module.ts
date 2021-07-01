import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './mycomponents/post/post.component';
import { HomeComponent } from './mycomponents/home/home.component';

const routes: Routes = [
  {  path: 'post',component:PostComponent},
  {  path: '',component:HomeComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
