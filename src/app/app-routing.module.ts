import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'Registration',component:RegisterformComponent},
  {path:'Home',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
