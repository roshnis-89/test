import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyyprojectsComponent } from './myyprojects/myyprojects.component';
import { ProjectComponent } from './project/project.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'my',
    component: MyyprojectsComponent,
  },
  {
    path: 'create',
    component: NewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
