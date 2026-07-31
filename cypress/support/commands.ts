import loginCmd, { UserAuthData } from './commands/loginCmd';

Cypress.Commands.add('login', loginCmd);

declare global {
  namespace Cypress {
    interface Chainable {
      login(authData?: UserAuthData): Chainable<void>;
    }
  }
}

export {};
