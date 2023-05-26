import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
{path: '', component: DashboardComponent},
{path: 'property', component: PropertyComponent},
{path: 'resources', component: ResourcesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
