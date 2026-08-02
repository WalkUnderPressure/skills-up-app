import { login as loginCmd } from './commands/login';
import * as ElementsCmds from './commands/elements';
import * as ProfileCmds from './commands/profile';

Cypress.Commands.addAll(ElementsCmds);
Cypress.Commands.add('login', loginCmd);
Cypress.Commands.addAll(ProfileCmds);

export {};
