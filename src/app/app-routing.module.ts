import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { PagesTwoComponent } from './components/pages-two/pages-two.component';
import { PagesThreeComponent } from './components/pages-three/pages-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/home',
    pathMatch: 'full'
  },
  {
    path: 'page/home',
    component: PagesComponent
  },
  {
    path: 'page/recomendation',
    component: PagesTwoComponent
  },
  {
    path: 'page/stadistics',
    component: PagesThreeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
