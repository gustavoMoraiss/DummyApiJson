import {useQuery} from '@tanstack/react-query';
import {Product, ProductsResponse} from '../service/getAllProductsService';
import getClient from '../api/client';
import catchAsyncError from '../api/catchError';

const fetchProducts = async (): Promise<Product[]> => {
  const client = await getClient();
  const {data} = await client.get('/products');
  return data.products;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    onError(err) {
      const errorMessage = catchAsyncError(err);
    },
  });
};
