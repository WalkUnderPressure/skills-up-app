import axios from 'axios';

import safeJsonParse from 'shared/lib/helpers/safeJsonParse';
import { LS_AUTH_USER } from 'shared/constants/localStorage';
import { User } from 'entities/User';

const AUTH_TOKEN = safeJsonParse<User>(localStorage.getItem(LS_AUTH_USER))?.id;

const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

export default $api;
