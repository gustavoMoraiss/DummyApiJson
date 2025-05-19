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
  stock: number;
  thumbnail: string;
};

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
};
