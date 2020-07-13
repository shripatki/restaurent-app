export class Menu {
  restaurantId: string;
  menuItems: Item[];
}

export class Item {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  itemQuantity?: number;
}
