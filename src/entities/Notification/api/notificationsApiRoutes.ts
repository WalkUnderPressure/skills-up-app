import { buildUrlWithQueryParams } from '~/entities/SearchAndFiltering/api';
import { SearchAndFiltering } from '~/entities/SearchAndFiltering/types';

export const notificationsApiRoutes = {
  base: '/notifications/',
  filter: (params: SearchAndFiltering) => {
    return buildUrlWithQueryParams(notificationsApiRoutes.base, params);
  },
};
