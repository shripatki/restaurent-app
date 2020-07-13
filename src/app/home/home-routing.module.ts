import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'restaurants',
        children: [
          {
            path: '',
            loadChildren:
              'src/app/home/restaurants/restaurants.module#RestaurantsPageModule',
          },
          {
            path: ':restaurantId',
            loadChildren: './restaurants/menu/menu.module#MenuPageModule',
          },
        ],
      },
      {
        path: 'cart',
        loadChildren: 'src/app/cart//cart.module#CartPageModule',
      },
      {
        path: 'discovery',
        loadChildren: 'src/app/discovery/discovery.module#DiscoveryPageModule',
      },
      {
        path: 'scanner',
        loadChildren: 'src/app/scanner/scanner.module#ScannerPageModule',
      },
      {
        path: 'profile',
        loadChildren: 'src/app/profile/profile.module#ProfilePageModule',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/restaurants',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
