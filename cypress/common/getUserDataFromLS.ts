import safeJsonParse from '~/shared/lib/helpers/safeJsonParse';
import { LS_AUTH_USER } from '~/shared/constants/localStorage';
import { User } from '~/entities/User';

export const getUserDataFromLS = () => {
  return safeJsonParse<User>(localStorage.getItem(LS_AUTH_USER));
};
