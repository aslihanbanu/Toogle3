import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { ProfilimComponent } from './profilim/profilim.component';


const routes: Routes = [

  {path:'silidenav', component:SlidenavComponent},
  {path:'profil', component:ProfilimComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
