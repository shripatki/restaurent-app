import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path:'auth', loadChildren:'./auth/auth.module#AuthPageModule'},
  {
    path: 'restaurants',
    loadChildren:
      'src/app/home/restaurants/restaurants.module#RestaurantsPageModule',
  },
  { path: 'cart', loadChildren: 'src/app/cart/cart.module#CartPageModule' },
  {
    path: 'discovery',
    loadChildren: 'src/app/discovery/discovery.module#DiscoveryPageModule',
  },
  { path: 'home', loadChildren: 'src/app/home/home.module#HomePageModule' },
  {
    path: 'profile',
    loadChildren: 'src/app/profile/profile.module#ProfilePageModule',
  },
  {
    path: 'scanner',
    loadChildren: 'src/app/scanner/scanner.module#ScannerPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
