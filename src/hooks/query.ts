import {useQuery} from '@tanstack/react-query';
import getClient from '../api/client';
import catchAsyncError from '../api/catchError';
import {Product} from '../api/domain/product';

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
