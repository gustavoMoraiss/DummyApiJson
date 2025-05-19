import axios, {CreateAxiosDefaults} from 'axios';

const baseURL = 'https://dummyjson.com';

export const api = axios.create({
  baseURL: baseURL,
});

type headers = CreateAxiosDefaults<any>['headers'];

export const getClient = async (headers?: headers) => {
  const token = '';

  if (!token) return axios.create({baseURL});

  const defaultHeaders = {
    Authorization: 'Bearer ' + token,
    ...headers,
  };

  return axios.create({baseURL, headers: defaultHeaders});
};

export default getClient;
