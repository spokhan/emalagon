import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './guard/login/login.guard';
import { HomeGuard } from './guard/home/home.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[HomeGuard]
  },
  {
    path:'details',
    component:DetailsComponent,
    canActivate:[HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
