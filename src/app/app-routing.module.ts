import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreComponent } from './offre/offre.component';
import { UserComponent } from './user/user.component';
import { AddOffreComponent } from './offre/addOffre.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: OffreComponent },
  { path: 'offre', component: OffreComponent, canActivate : [AuthGuard] },
  { path: 'addOffre', component: AddOffreComponent, canActivate : [AuthGuard] },
  { path: 'updateOffre/:id', component: AddOffreComponent , canActivate : [AuthGuard]},
  { path: 'register', component: UserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
