import { Menu } from './menu.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: Menu[] = [
    {
      restaurantId: 'r1',
      menuItems: [
        {
          name: 'Oreo Cookie Cheesecake',
          price: 350,
          imageUrl:
            'https://www.ndtv.com/cooks/images/oreo-cheesecake_article.jpg',
          description:
            'A much-loved dessert made with crunchy oreo cookies, luscious cream cheese and melted chocolate. This cake is a sweet sweet blessing!',
        },
        {
          name: 'Savory Corn Tarts',
          price: 350,
          imageUrl: 'https://www.ndtv.com/cooks/images/tarts_article.jpg',
          description:
            'Party snacks get a healthy makeover! Go gluten free with these savory tarts made with maize flour and filled with a cheesy vegetable mix.',
        },
        {
          name: 'Gratin of Potatoes with Garlic Cream',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-03/potato-cheese-625_625x350_61459345311.jpg',
          description:
            'Dig deep into layers of sliced, seasoned potatoes and three types of cheese, baked golden brown with garlic-y undertones.',
        },
        {
          name: 'Cheese and Pesto Eggplant',
          price: 350,
          imageUrl: 'https://www.ndtv.com/cooks/images/aubergine_article.jpg',
          description:
            'Eggplant laced with Parmesan cheese and baked in freshly made pesto sauce.',
        },
        {
          name: 'Four Cheese Pasta',
          price: 350,
          imageUrl: 'https://www.ndtv.com/cooks/images/pasta_article.jpg',
          description:
            'Cheese lovers, rejoice! Gourmet macaroni cheese with parmesan, cheddar, brie and emmental. This recipe is as cheesy as it can get. ',
        },
        {
          name: 'French Onion Soup with Cheese Souffle',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-03/french-onion-soup-625_625x350_51459345271.jpg',
          description:
            'An old world classic - a broth of sweet caramelized onions topped with a cheesy souffle as light as a feather. Baked till the cheese melts and served immediately, this one a slurp that warms your soul!',
        },
        {
          name: 'Mushroom Mac and Cheese',
          price: 350,
          imageUrl:
            'https://www.ndtv.com/cooks/images/mac-and-cheese_article.jpg',
          description:
            'The ultimate comfort food - mac and cheese, now with the goodness of mushrooms.',
        },
        {
          name: 'Classic Mac and Cheese',
          price: 350,
          imageUrl:
            'https://c.ndtvimg.com/2018-10/p8o5usq_mac-and-cheese_625x300_05_October_18.jpg',
          description:
            'The quintessential cheese recipe! Mac and cheese is the most loved, all-time meal for kids and adults alike. Quick, easy and loaded with cheese.',
        },
        {
          name: 'Watermelon, Olive and Feta Salad',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-03/watermelon-salad-625_625x350_71459345446.jpg',
          description:
            'The perfect summer salad of melon, olives and feta cheese with toasted pumpkin seeds. The sweetness of watermelon is balanced well with chaat masala, lemon and soy sauce. A melange of flavours!',
        },
        {
          name: ' Cheese Fondue',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-03/cheese-fondue-625_625x350_71459345248.jpg',
          description:
            'Fondue is a Swiss dish made with melted cheese. Emmenthaler and Gruyere cheese melted and drizzled with some white wine. Dip blanched vegetables like broccoli and baby corn in this hot mixture and enjoy the cheesiness in every bite.',
        },
      ],
    },
    {
      restaurantId: 'r2',
      menuItems: [
        {
          name: 'Nacho Tots',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Nacho-Tots_EXPS_H13x9BZ16_194273_D04_28_6b-2-1024x1024.jpg',
          description: 'A party appetizer that everyone loves.',
        },
        {
          name: 'Root Beer Pulled Pork Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Root-Beer-Pulled-Pork-Nachos_EXPS_THJJ17_205278_B02_08_8b-1-1024x1024.jpg',
          description: 'A party appetizer that everyone loves.',
        },
        {
          name: 'Fresh Shrimp and Avocado Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/05/Fresh-Shrimp-and-Avocado-Nachos_EXPS_SDJJ18_214141_B02_15_2b-2-1024x1024.jpg',
          description:
            'For the fans of shrimp, and who loves nachos.A combined favorites and added fresh avocado, a cool yet satisfying snack.',
        },
        {
          name: 'No-Guilt Beefy Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/No-Guilt-Beefy-Nachos_EXPS_EDSC17_201123_C03_16_2b-1024x1024.jpg',
          description:
            'Nachos you can feel good about! This meaty topping has less fat and sodium than typical nacho beef.',
        },
        {
          name: 'Queso Baked Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Queso-Baked-Nachos_EXPS_SDAM18_87888_D12_05_5b-1024x1024.jpg',
          description: 'I modified a nachos dish.',
        },
        {
          name: 'Spicy Nacho Bake',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Spicy-Nacho-Bake_EXPS_GBBZ19_37971_E11_13_13b-1-1024x1024.jpg',
          description:
            ' For those who loves the ground beef and bean filling, and crunchy, cheesy topping.',
        },
        {
          name: 'Nacho Chicken',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Nacho-Chicken_EXPS_CHBZ19_14424_B10_23_6b-1-1024x1024.jpg',
          description: 'A mexican chicken with Doritos casserole',
        },
        {
          name: 'Gourd-geous Halloween Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_HBKZ16_176691_B05_04_6b-1024x1024.jpg',
          description: 'For the lovers of nachos.',
        },
        {
          name: 'Skillet Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps133666_SD153321B01_30_6b-1024x1024.jpg',
          description:
            'A toppings of sour cream, tomatoes, jalapeno and red onion.',
        },
        {
          name: 'Baked Chicken Nachos',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps34618_13X9153596B10_30_4b-3-1024x1024.jpg',
          description:
            'Rotisserie with the seasonings and splash of lime juice lend fantastic flavor.',
        },
      ],
    },
    {
      restaurantId: 'r3',
      menuItems: [
        {
          name: 'Watermelon Lychee Granita',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/watermelon-juice_625x350_81464002799.jpg',
          description: 'A refreshing way to beat the heat.',
        },
        {
          name: ' Cool Kiwi Juice',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/kiwi-juice_625x350_71464002837.jpg',
          description:
            'A tall glass of refreshing drink with cucumber, kiwi and the zing of Thai ginger.',
        },
        {
          name: 'Aam Ras',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-04/aam-ras_625x350_41429705345.jpg',
          description:
            'The fruit of the summer shines its way into your glass. A lovely blend of mango pulp, lime juice and spices.',
        },
        {
          name: 'Ananas Da Panna',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/pineapple-juice_625x350_61464003149.jpg',
          description:
            'A twist to the popular mango drink, this recipe calls for fresh pineapple pulp which is blended with cumin powder, black salt and lime juice.',
        },
        {
          name: 'Lychee and Dill Juice',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/lychee-juice_625x350_41464003181.jpg',
          description:
            'Make the most of lychees by using them to make this delicious summer cooler. Add lime and fresh dill for some zing.',
        },
        {
          name: 'Very Berry Khatta',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/the-sassy-spoon_625x350_81464076111.jpg',
          description:
            'Enjoy the tangy notes of mulberries, lime, orange, grape juice and kala khatta in this tantalising beverage. ',
        },
        {
          name: 'Virgin Punch',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/fruit-punch_625x350_51464003631.jpg',
          description:
            'Fruity, with an instant power to boost up your energy levels, this juice recipe makes the most of fruits like apple, mango, orange and some sparkling lemonade. ',
        },
        {
          name: 'Grape Nectar',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/grape-juice_625x350_61464003436.jpg',
          description:
            'A sweet and tangy mixture of grape juice, lemon chunks and lychees. Overcome the summer heat with this cool mocktail. ',
        },
        {
          name: 'Plum-ness',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2017-12/plum-smoothie_620x330_81514276586.jpg',
          description:
            'A refreshing plum drink is uses pureed plums and condensed milk which will cool you down instantly on a hot summer day.',
        },
        {
          name: 'Orange and Basil Juice',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-05/orange-juice_625x350_51464003528.jpg',
          description:
            'Orange and basil come together to create this revitalizing drink which is perfect to beat the heat. ',
        },
      ],
    },
    {
      restaurantId: 'r4',
      menuItems: [
        {
          name: 'Garlic-Chive Baked Fries',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Chive-Baked-Fries_exps136044_THHC2236536A05_20_10bC_RMS-1024x1024.jpg',
          description:
            'Crispy, golden fries, full of garlic flavor and just a little bit of heat.',
        },
        {
          name: 'Short Rib Poutine',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Short-Rib-Poutine_EXPS_SDDJ17_198459_B08_10_5b-3-1024x1024.jpg',
          description: 'This dish combines the hearty, spicy flavors.',
        },
        {
          name: 'Parmesan Sweet Potato Wedges',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps61494_HC163708C09_02_7b-1024x1024.jpg',
          description: ' The crispy Parmesan coating',
        },
        {
          name: 'Baked Sweet Potato Fries',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Baked-Sweet-Potato-Fries_EXPS_THSO17_87885_B04_20_3b-1024x1024.jpg',
          description: 'Baked sweet potato fries',
        },
        {
          name: 'Oven Fries',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Oven-Fries_exps39966_UH2464847B03_19_4b_RMS-1024x1024.jpg',
          description: 'Fries with paprika and garlic powder. ',
        },
        {
          name: 'Seasoned Oven Baked Fries',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Seasoned-Oven-Baked-Fries_exps20423_SD2232457B08_23_1bC_RMS-1-1024x1024.jpg',
          description: 'Tasty homemade fries for an anytime side. ',
        },
        {
          name: 'Loaded Waffle Fries',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Loaded-Waffle-Fries_exps26017_BOS2469759C02_08_5b_RMS-1024x1024.jpg',
          description:
            'Topped with a savory blend of cheese, scallions and bacon. ',
        },
        {
          name: 'Parmesan Potato Wedges',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Parmesan-Potato-Wedges_EXPS_SDFM18_16812_D10_04_4b-1024x1024.jpg',
          description: 'Parmesan potato wedges',
        },
        {
          name: 'Cheesy Chili Fries',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps174884_SD153208A08_08_1b-1024x1024.jpg',
          description: 'Served with green onions and avocado.',
        },
        {
          name: 'Potato Wedges with Sweet & Spicy Sauce',
          price: 350,
          imageUrl:
            'https://www.tasteofhome.com/wp-content/uploads/2018/01/Potato-Wedges-with-Sweet-Spicy-Sauce_exps167809_SD143203D10_16_8bC_RMS-1024x1024.jpg',
          description: 'Potato Wedges with Sweet & Spicy Sauce',
        },
      ],
    },
    {
      restaurantId: 'r5',
      menuItems: [
        {
          name: 'Pepperoni Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/pizza_625x350_81424681440.jpg',
          description: 'This one is cheesy, spicy and loaded with pepperoni!',
        },
        {
          name: 'Multigrain Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/pizza_625x350_51424681477.jpg',
          description:
            'A combination of mouth-watering flavours and healthy ingredients.',
        },
        {
          name: 'Chicken Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/meat-pizza_625x350_41424681507.jpg',
          description:
            'This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness.',
        },
        {
          name: 'Margherita Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/cheese-pizza_625x350_71424681540.jpg',
          description:
            'Margherita Pizza is to many the true Italian flag as it was created resembling the colors of the Italian flag, red (tomato), white (mozzarella) and green (basil). Since then this classic pizza has never disappointed anyone.',
        },
        {
          name: 'Kebab and Paneer Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/pizza_625x350_71424681573.jpg',
          description:
            'A mouth watering pizza recipe that is sure to tantalize your taste buds. ',
        },
        {
          name: 'Wholegrain Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/wholegrain-pizza_625x350_71424681608.jpg',
          description:
            'A brilliant, gorgeous looking pizza that is high on flavour yet low on calories.',
        },
        {
          name: 'Scone Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2016-04/crusty-gourmet-pizzas-gurgaon-625_625x350_41460295393.jpg',
          description:
            'The crust is thin and soft somewhat similar to a bread base.',
        },
        {
          name: 'Vegetarian Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/pizza_625x350_61424681917.jpg',
          description:
            'Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed!',
        },
        {
          name: 'Mexican Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/mexican-pizza_625x350_41424681959.jpg',
          description:
            'Italian techniques combined with Mexican flavours - an unforgettable gastronomic experience! topped with Mexican gems like kidney beans and tossed with a fiery hot sauce.',
        },
        {
          name: 'Mini Mushroom Pizza',
          price: 350,
          imageUrl:
            'https://i.ndtvimg.com/i/2015-02/pizza_625x350_81424681995.jpg',
          description: 'Topped with mushrooms, corn and cheese.',
        },
      ],
    },
  ];
  constructor() {}

  getMenuById(id: string) {
    return { ...this.menu.find((p) => p.restaurantId === id) };
  }
  getItemDetails(name: string) {
    return {
      ...this.menu.find((p) => {
        p.menuItems.find((item) => {
          return item.name === name;
        });
      }),
    };
  }
}
