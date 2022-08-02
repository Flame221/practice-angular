import { Component } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    {
      name: 'Oil',
      description: 'Vegetable oils, or vegetable fats, are oils extracted from seeds or from other parts of fruits. Like animal fats, vegetable fats are mixtures of triglycerides. Soybean oil, grape seed oil, and cocoa butter are examples of seed oils, or fats from seeds. Olive oil, palm oil, and rice bran oil are examples of fats from other parts of fruits. In common usage, vegetable oil may refer exclusively to vegetable fats which are liquid at room temperature. Vegetable oils are usually edible. ',
      price: 3,
    },
    {
      name: 'Seeds',
      description: `A seed is an embryonic plant enclosed in a protective outer covering, along with a food reserve. The formation of the seed is a part of the process of reproduction in seed plants, the spermatophytes, including the gymnosperm and angiosperm plants.
      Seeds are the product of the ripened ovule, after the embryo sac is fertilized by sperm from pollen, forming a zygote. The embryo within a seed develops from the zygote, and grows within the mother plant to a certain size before growth is halted. The seed coat arises from the integuments of the ovule. `,
      price: 2,
    },

    {
      name: 'Apple',
      description: `An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.

      Apples grown from seed tend to be very different from those of their parents, and the resultant fruit frequently lacks desired characteristics. Generally, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be larger and much slower to fruit after planting. Rootstocks are used to control the speed of growth and the size of the resulting tree, allowing for easier harvesting.`,
      price: 3,
    },

    {
      name: 'Pear',
      description: `A pear is a mild, sweet fruit with a fibrous center. They are rich in essential antioxidants, plant compounds, and dietary fiber. Pears pack all of these nutrients in a fat free, cholesterol free fruit that is around 100 calories.`,
      price: 4,
    },

  ]
  currentProduct!: Product;
  title = 'practice-angular';

  showDetails(product: Product): void {
    console.log(product.name);
    this.currentProduct = product;
  }
}
