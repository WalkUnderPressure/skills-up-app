import { interceptFixture } from '../commands/common/interceptFixture';
import { mount } from './commands/mount';

Cypress.Commands.addAll({
  mount,
  interceptFixture,
});
