export type GetAllProducts = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  images: string[];
};

const getAllProducts: GetAllProducts[] = [
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 2,
    title: 'Base Líquida Maybelline Fit Me',
    price: 49.9,
    rating: 4.7,
    category: 'beauty',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 3,
    title: 'Notebook Dell Inspiron 15',
    price: 3899.0,
    rating: 4.6,
    category: 'laptops',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 4,
    title: 'Relógio Masculino Casio G-Shock',
    price: 899.99,
    rating: 4.8,
    category: 'mens-watches',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 5,
    title: 'Tênis Nike Air Max Masculino',
    price: 649.9,
    rating: 4.7,
    category: 'mens-shoes',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 6,
    title: 'Camisa Polo Lacoste Masculina',
    price: 299.9,
    rating: 4.6,
    category: 'mens-shirts',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 7,
    title: 'Smartphone Samsung Galaxy S21',
    price: 4299.0,
    rating: 4.9,
    category: 'smartphones',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 8,
    title: 'Acessório de Celular - Carregador Rápido',
    price: 89.9,
    rating: 4.5,
    category: 'mobile-accessories',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 9,
    title: 'Tênis Adidas Run Falcon',
    price: 359.0,
    rating: 4.6,
    category: 'mens-shoes',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 10,
    title: 'Relógio de Pulso Fossil Townsman',
    price: 1299.99,
    rating: 4.8,
    category: 'mens-watches',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 11,
    title: 'Camisa Social Aramis Slim Fit',
    price: 199.9,
    rating: 4.7,
    category: 'mens-shirts',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 12,
    title: 'Tablet iPad 10.2" Apple',
    price: 3799.0,
    rating: 4.9,
    category: 'tablets',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 13,
    title: 'Óculos de Sol Ray-Ban Aviator',
    price: 649.0,
    rating: 4.8,
    category: 'sunglasses',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 14,
    title: 'Bolsa Feminina Michael Kors',
    price: 1499.0,
    rating: 4.9,
    category: 'womens-bags',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 15,
    title: 'Tênis Feminino Nike Revolution',
    price: 299.0,
    rating: 4.6,
    category: 'womens-shoes',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 16,
    title: 'Vestido Longo Floral Farm',
    price: 429.9,
    rating: 4.7,
    category: 'womens-dresses',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 17,
    title: 'Aparelho de Barbear Philips OneBlade',
    price: 189.9,
    rating: 4.8,
    category: 'skin-care',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 18,
    title: 'Suplemento Whey Protein Gold Standard',
    price: 289.9,
    rating: 4.9,
    category: 'sports-accessories',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 19,
    title: 'Moto Elétrica Voltz EV1 Sport',
    price: 18999.0,
    rating: 4.7,
    category: 'motorcycle',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
  {
    id: 20,
    title: 'Colar de Prata Feminino Pandora',
    price: 459.0,
    rating: 4.8,
    category: 'womens-jewellery',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
  },
];

export default getAllProducts;
