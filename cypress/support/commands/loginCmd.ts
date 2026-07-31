import { authApiRoutes } from '~/features/SignInByUsername/api/authApiRoutes';
import { LS_AUTH_USER } from '~/shared/constants/localStorage';
import { User } from '~/entities/User';

export type UserAuthData = {
  username?: string;
  password?: string;
};

const loginCmd = (authData?: UserAuthData) => {
  cy.env(['API_URL', 'auth']).then(({ API_URL, auth }) => {
    const username = authData?.username ?? auth.username;
    const password = authData?.password ?? auth.password;

    cy.session([username, password], () => {
      cy.request<User>({
        method: 'POST',
        url: `${API_URL}${authApiRoutes.signIn}`,
        body: {
          username,
          password,
        },
      }).then((response) => {
        const userData = response.body;

        if (userData.id) {
          window.localStorage.setItem(LS_AUTH_USER, JSON.stringify(userData));
        }
      });
    });
  });
};

export default loginCmd;
