import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path: 'new-comp', component: NewComponentComponent},
  { path: 'three-comp', component: ComponentThreeComponent},
  {path: 'home', component: HomeComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
