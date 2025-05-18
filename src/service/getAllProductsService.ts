export type ProductsResponse = {
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  images: string[];
  description: string;
  reviews: Review[];
};

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
};

const getAllProducts: Product[] = [
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
  {
    id: 1,
    title: 'Perfume Paco Rabanne 1 Million',
    price: 399.9,
    rating: 4.9,
    category: 'fragrances',
    images: [
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
      'https://www.arttrav.com/wp-content/uploads/2021/06/colosseum-alexandrakorey.jpg',
    ],
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
      },
    ],
    description:
      'O Samsung Galaxy S23 combina desempenho de ponta com um design sofisticado. Equipado com o poderoso processador Snapdragon 8 Gen 2, 8 GB de RAM e até 512 GB de armazenamento interno, ele oferece uma experiência fluida mesmo em tarefas exigentes.',
  },
];

export default getAllProducts;
