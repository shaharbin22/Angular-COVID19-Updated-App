import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './services/auth.guard';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'main', component:MainComponent,canActivate:[AuthGuard] },
  {path: 'users', component:UsersComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
