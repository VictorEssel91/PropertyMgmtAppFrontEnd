import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
{path: '', component: DashboardComponent},
{path: 'property', component: PropertyComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
