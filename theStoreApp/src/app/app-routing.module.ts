import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'the-store-home',
    pathMatch: 'full'
  },
  {
    path: 'the-store-home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'events-calendar',
    loadChildren: './list/list.module#ListPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
