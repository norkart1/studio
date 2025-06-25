export type Product = {
  id: string;
  name: string;
  image: string;
  aiHint: string;
  price: string;
  description: string;
  origin: string;
  farmingPractices: string;
  nutritionalInfo: string;
};

export type Recipe = {
  id: string;
  productId: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
};

export const products: Product[] = [
  {
    id: 'prod1',
    name: 'Heirloom Tomatoes',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'heirloom tomatoes',
    price: '$4.99/lb',
    description: 'Vibrantly colored, uniquely shaped, and bursting with a sweet, complex flavor that mass-produced tomatoes lack.',
    origin: 'Sunnyvale Farms, CA',
    farmingPractices: 'Certified Organic, non-GMO, grown with sustainable practices and harvested at peak ripeness.',
    nutritionalInfo: 'Rich in antioxidants, particularly lycopene, and an excellent source of vitamin C and potassium.',
  },
  {
    id: 'prod2',
    name: 'Organic Kale',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'organic kale',
    price: '$2.99/bunch',
    description: 'Fresh, crisp kale with a deep green color and a slightly earthy, peppery taste. Perfect for salads and smoothies.',
    origin: 'Green Earth Organics, WA',
    farmingPractices: 'Grown without synthetic pesticides or fertilizers, focusing on soil health and biodiversity.',
    nutritionalInfo: 'A nutritional powerhouse, packed with vitamins A, K, and C, as well as calcium and iron.',
  },
  {
    id: 'prod3',
    name: 'Rainbow Carrots',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'rainbow carrots',
    price: '$3.49/bunch',
    description: 'A beautiful assortment of purple, yellow, and white carrots, each with a subtly different, sweet flavor.',
    origin: 'Colorfield Gardens, OR',
    farmingPractices: 'Sustainably farmed, hand-weeded, and harvested with care to preserve their natural beauty and taste.',
    nutritionalInfo: 'Each color provides a unique set of phytonutrients. All are a great source of fiber and vitamin A.',
  },
    {
    id: 'prod4',
    name: 'Sweet Strawberries',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'sweet strawberries',
    price: '$5.99/pint',
    description: 'Juicy, sweet, and aromatic strawberries, picked at the peak of perfection for the ultimate summer treat.',
    origin: 'Berry Best Farms, FL',
    farmingPractices: 'Grown using integrated pest management to minimize chemical use. Hand-picked daily.',
    nutritionalInfo: 'Excellent source of Vitamin C and manganese. Packed with antioxidants and polyphenols.',
  },
];

export const recipes: Recipe[] = [
  {
    id: 'rec1',
    productId: 'prod1',
    name: 'Classic Bruschetta',
    description: 'A timeless Italian appetizer that highlights the freshness of heirloom tomatoes.',
    ingredients: [
      '4-5 heirloom tomatoes, diced',
      '1 clove garlic, minced',
      '1/4 cup fresh basil, chopped',
      '1 tbsp balsamic vinegar',
      '1 tbsp extra virgin olive oil',
      'Salt and pepper to taste',
      '1 baguette, sliced and toasted',
    ],
    instructions: [
      'In a medium bowl, combine the diced tomatoes, minced garlic, and chopped basil.',
      'Drizzle with balsamic vinegar and olive oil. Season with salt and pepper, and gently toss to combine.',
      'Let the mixture sit for at least 10 minutes to allow the flavors to meld.',
      'Spoon the tomato mixture onto the toasted baguette slices and serve immediately.',
    ],
  },
  {
    id: 'rec2',
    productId: 'prod2',
    name: 'Garlic Parmesan Kale Chips',
    description: 'A crispy, savory, and healthy snack that\'s incredibly easy to make.',
    ingredients: [
      '1 bunch organic kale',
      '1 tbsp olive oil',
      '1/4 cup grated Parmesan cheese',
      '1/2 tsp garlic powder',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Line a baking sheet with parchment paper.',
      'Wash and thoroughly dry the kale. Remove the tough stems and tear the leaves into bite-sized pieces.',
      'In a large bowl, toss the kale with olive oil, Parmesan cheese, garlic powder, salt, and pepper until evenly coated.',
      'Spread the kale in a single layer on the prepared baking sheet.',
      'Bake for 10-15 minutes, or until the edges are brown and crispy. Watch closely to prevent burning.',
    ],
  },
  {
    id: 'rec3',
    productId: 'prod3',
    name: 'Honey-Glazed Rainbow Carrots',
    description: 'A simple yet elegant side dish that brings out the natural sweetness of rainbow carrots.',
    ingredients: [
      '1 bunch rainbow carrots, scrubbed',
      '2 tbsp butter, melted',
      '2 tbsp honey',
      '1/2 tsp dried thyme',
      'Salt and pepper to taste',
      '1 tbsp fresh parsley, chopped',
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'If carrots are thick, slice them in half lengthwise. Arrange in a single layer on a baking sheet.',
      'In a small bowl, whisk together the melted butter, honey, thyme, salt, and pepper.',
      'Pour the honey-butter mixture over the carrots and toss to coat.',
      'Roast for 20-25 minutes, or until tender and caramelized, flipping halfway through.',
      'Garnish with fresh parsley before serving.',
    ],
  },
   {
    id: 'rec4',
    productId: 'prod4',
    name: 'Fresh Strawberry Vinaigrette',
    description: 'A bright and fruity salad dressing that is perfect for summer salads.',
    ingredients: [
      '1 cup fresh strawberries, hulled',
      '1/4 cup extra virgin olive oil',
      '2 tbsp balsamic vinegar',
      '1 tbsp honey or maple syrup',
      '1 tsp Dijon mustard',
      'Pinch of salt and pepper',
    ],
    instructions: [
      'Combine all ingredients in a blender or food processor.',
      'Blend until smooth and creamy.',
      'Taste and adjust seasoning if necessary. Add more honey for sweetness or vinegar for tang.',
      'Serve over a fresh green salad, perhaps with goat cheese and walnuts.',
      'Store in an airtight container in the refrigerator for up to a week.',
    ],
  },
];
