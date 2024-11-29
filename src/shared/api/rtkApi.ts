import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import safeJsonParse from 'shared/lib/helpers/safeJsonParse';
import { LS_AUTH_USER } from 'shared/constants/localStorage';
import { User } from 'entities/User';

const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: (headers) => {
      const authToken = safeJsonParse<User>(localStorage.getItem(LS_AUTH_USER))?.id || '';

      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default rtkApi;
