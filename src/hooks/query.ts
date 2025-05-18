import {useQuery} from '@tanstack/react-query';
import {ProductsResponse} from '../service/getAllProductsService';
import getClient from '../api/client';

const fetchProducts = async (): Promise<ProductsResponse> => {
  const client = await getClient();
  const {data} = await client.get('/products');
  return data.products;
};

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
