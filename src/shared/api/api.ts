import axios from 'axios';

import { LS_AUTH_USER } from 'shared/constants/localStorage';

const AUTH_TOKEN = JSON.parse(localStorage.getItem(LS_AUTH_USER))?.['id'];

const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

export default $api;
