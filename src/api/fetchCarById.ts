import { apiFetch } from './apiFetch/apiFetch';

export const fetchCarById = (id: number) => {
  return apiFetch({
    method: 'GET',
    url: `https://o11h5923hh.execute-api.us-east-1.amazonaws.com/dev/cars/${id}`,
  });
};
