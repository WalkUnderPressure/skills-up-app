import { login as loginCmd } from './commands/login';
import * as elementsCmds from './commands/elements';
import * as profileCmds from './commands/profile';
import * as postCmds from './commands/post';
import * as commentaryCmds from './commands/commentary';
import * as ratingCmds from './commands/rating';
import * as apiCmds from './commands/api';
import { interceptFixture } from './commands/interceptFixture';

Cypress.Commands.addAll({
  ...apiCmds,
  ...elementsCmds,
  login: loginCmd,
  ...postCmds,
  ...profileCmds,
  ...commentaryCmds,
  ...ratingCmds,
  interceptFixture,
});

export {};
