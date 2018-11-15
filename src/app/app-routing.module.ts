import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'signin', component:SigninComponent},
  // {path: '', redirectTo: 'signin', pathMatch: 'full'}, //for "/" only
  {path: '**', redirectTo: 'signin', pathMatch: 'full'}   //for "/<any>"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
