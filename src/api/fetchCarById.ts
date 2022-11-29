import { apiFetch } from './apiFetch/apiFetch';

export const fetchCarById = (id: number) => {
  return apiFetch({
    method: 'GET',
    url: `https://8z8ipxz06g.execute-api.us-east-1.amazonaws.com/dev/cars/${id}`,
  });
};
