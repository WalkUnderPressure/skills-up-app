import axios from 'axios';

import safeJsonParse from '~/shared/lib/helpers/safeJsonParse';
import { LS_AUTH_USER } from '~/shared/constants/localStorage';
import { User } from '~/entities/User';

const $api = axios.create({
  baseURL: __API_URL__,
});

if (__PROJECT__ === 'app') {
  $api.interceptors.request.use(
    (config) => {
      const authToken = safeJsonParse<User>(localStorage.getItem(LS_AUTH_USER))?.id || '';

      if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export default $api;
