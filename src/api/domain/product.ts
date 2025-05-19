import {Review} from './review';

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
