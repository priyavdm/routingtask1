import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstdetailsComponent } from './firstdetails/firstdetails.component';
import { SeconddetailsComponent } from './seconddetails/seconddetails.component';

const routes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'first/:id', component:FirstdetailsComponent},
  {path:'second/:id', component:SeconddetailsComponent},
  {path:'**', component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
