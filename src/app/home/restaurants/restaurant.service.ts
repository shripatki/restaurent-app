import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
      id: 'r1',
      title: 'Cheesy Does It',
      description: 'Cheesy',
      ratings: 4.1,
      imageUrl:
        'https://cdn.vox-cdn.com/thumbor/0i7pwyKn55-nzHM20swBTmFKolA=/0x0:5184x3456/2070x1164/filters:focal(2923x1461:3751x2289):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53516931/raclette_potatoes.0.jpg',
      avgPrice: 900,
    },
    {
      id: 'r2',
      title: 'Nacho Problem',
      description: 'Nachos',
      ratings: 3.9,
      imageUrl:
        'https://cdn.winsightmedia.com/platform/files/public/2018-04/background/800x420/twin-peaks-nachos_1524861777.jpg',
      avgPrice: 650,
    },
    {
      id: 'r3',
      title: 'Fruce',
      description: 'Juices',
      ratings: 3.8,
      imageUrl:
        'https://previews.123rf.com/images/ezthaiphoto/ezthaiphoto1710/ezthaiphoto171000021/87425166-fruit-juice-in-water-cooler-tank-and-drinking-tank-service-in-restaurant.jpg',
      avgPrice: 700,
    },
    {
      id: 'r4',
      title: 'Lord of the Fries',
      description: 'Fries',
      ratings: 4.2,
      imageUrl:
        'https://c7.alamy.com/comp/WB7Y7K/burger-and-fries-chips-in-a-basket-on-a-wooden-board-in-a-restaurant-WB7Y7K.jpg',
      avgPrice: 600,
    },
    {
      id: 'r5',
      title: 'Basic Kneads Pizza',
      description: 'Pizza',
      ratings: 4.5,
      imageUrl:
        'https://trinketbar.com.au/wp-content/uploads/2019/05/Trinket-May-2019-68-1024x682.jpg',
      avgPrice: 800,
    },
  ];
  constructor() {}

  getAllRestaurants() {
    return [...this.restaurants];
  }
  getRestaurant(restaurantId: string) {
    return { ...this.restaurants.find((p) => p.id === restaurantId) };
  }
}
