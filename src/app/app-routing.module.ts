import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { UserComponent } from './user/user.component';
import { AddOffreComponent } from './offre/addOffre.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: OffreComponent },
  { path: 'offre', component: OffreComponent },
  { path: 'addOffre', component: AddOffreComponent },
  { path: 'updateOffre/:id', component: AddOffreComponent },
  { path: 'register', component: UserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
