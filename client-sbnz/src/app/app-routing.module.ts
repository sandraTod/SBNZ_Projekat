import { UserPageComponent } from './components/user-page/user-page.component';
import { MeatComponent } from './components/meat/meat.component';
import { SpiceComponent } from './components/spice/spice.component';
import { SauceComponent } from './components/sauce/sauce.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineComponent } from './components/wine/wine.component';

const routes: Routes = [
  {path: 'adminPage', component: AdminPageComponent},
  {path: 'userPage', component: UserPageComponent},
  {path: 'wines', component: WineComponent},
  {path: 'meats', component: MeatComponent},
  {path: 'sauces', component: SauceComponent},
  {path: 'spices', component: SpiceComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
