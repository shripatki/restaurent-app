import { Discovery } from './discovery.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscoveryService {
  discoveryImages: Discovery[] = [
    {
      name: 'Clubs & Bars',
      imageUrl:
        'https://w7.pngwing.com/pngs/656/458/png-transparent-glass-of-beer-illustration-beer-coffee-cup-mug-beer-food-beer-bottle-happy-birthday-vector-images-thumbnail.png',
    },
    {
      name: 'Fine Dining',
      imageUrl:
        'https://w7.pngwing.com/pngs/669/416/png-transparent-restaurant-hotel-food-menu-dish-restaurant-angle-furniture-business-thumbnail.png',
    },
    {
      name: 'Cafes',
      imageUrl:
        'https://w7.pngwing.com/pngs/570/458/png-transparent-coffee-mug-coffee-tea-cafe-cafxe9-au-lait-coffee-logo-text-cafe-tea-thumbnail.png',
    },
    {
      name: 'Nearby',
      imageUrl:
        'https://w7.pngwing.com/pngs/839/437/png-transparent-geo-fence-computer-icons-computer-software-more-info-icon-cdr-geolocation-artwork-thumbnail.png',
    },
    {
      name: 'Fast Foods',
      imageUrl:
        'https://w7.pngwing.com/pngs/518/962/png-transparent-fast-food-drink-junk-food-eating-food-icon-food-text-logo-thumbnail.png',
    },
    {
      name: 'Featured Foods',
      imageUrl:
        'https://w7.pngwing.com/pngs/401/180/png-transparent-computer-icons-bookmark-favicon-the-noun-project-icon-bookmark-miscellaneous-angle-logo-thumbnail.png',
    },
  ];

  constructor() {}

  getAllDiscovery() {
    return this.discoveryImages;
  }
}
