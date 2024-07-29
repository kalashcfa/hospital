import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewappoinmentComponent } from './pages/newappoinment/newappoinment.component';
import { AppoinmentlistComponent } from './pages/appoinmentlist/appoinmentlist.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:"full"
  },
  {
    path:'dashboard',
    component : DashboardComponent,
  },
  {
    path:'new',
    component : NewappoinmentComponent,
  },
  {
    path:'list',
    component : AppoinmentlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
