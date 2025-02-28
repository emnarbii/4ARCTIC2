import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"residences", component:ResidencesComponent},
  {path:"addResidence", component:ResidenceFormComponent},
  {path:"addApartment", component:AddApartmentComponent},
  {path:"details/:id", component:ResidenceDetailsComponent},
  {path:"**", component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
