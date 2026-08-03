import { login as loginCmd } from './commands/entities/login';
import * as elementsCmds from './commands/common/elements';
import * as profileCmds from './commands/entities/profile';
import * as postCmds from './commands/entities/post';
import * as commentaryCmds from './commands/entities/commentary';
import * as ratingCmds from './commands/entities/rating';
import * as apiCmds from './commands/common/api';
import { interceptFixture } from './commands/common/interceptFixture';

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
