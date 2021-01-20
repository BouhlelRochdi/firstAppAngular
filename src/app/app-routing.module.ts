import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { RegistreComponent } from './registre/registre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch:"full"
  },
  {
    path: 'accueil',
    component: AcceuilComponent
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegistreComponent
  },
  {
    path:'edit/:index',
    component: EditUserComponent
  },
  {
    path: '**',
    component : P404Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
