import { getUserDataFromLS } from '../../../common/getUserDataFromLS';
import { createAuthHeader } from '~/shared/api/common';

type RequestWithAuthParams<TData = unknown> = {
  url: string;
  method?: HttpMethod;
  headers?: Record<string, string>;
  data?: TData;
  failOnStatusCode?: boolean;
};

const requestWithAuth = <TResponse = unknown, TData = unknown>(
  params: RequestWithAuthParams<TData>,
): Cypress.Chainable<Cypress.Response<TResponse>> => {
  const { url, headers = {}, method = 'GET', data, failOnStatusCode = true } = params;

  const userData = getUserDataFromLS();

  if (!userData?.id) {
    throw new Error(
      'requestWithAuth: no user id found in local storage - make sure the user is logged in before calling this command',
    );
  }

  const requestHeaders = createAuthHeader(userData.id);
  const API_URL = Cypress.expose('API_URL');

  return cy.request<TResponse>({
    method,
    url: `${API_URL}${url}`,
    failOnStatusCode,
    headers: {
      ...requestHeaders,
      ...headers,
    },
    ...(data !== undefined ? { body: data } : {}),
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      requestWithAuth<TResponse = unknown, TData = unknown>(
        params: RequestWithAuthParams<TData>,
      ): Chainable<Cypress.Response<TResponse>>;
    }
  }
}

export { requestWithAuth };
