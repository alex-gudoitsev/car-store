import { apiFetch } from './apiFetch/apiFetch';

export const getOptionsHeader = (siteCode: string) => {
  return apiFetch({
    method: 'GET',
    url: `/api/repo-service/${siteCode}/settings/get/header`,
  });
};
