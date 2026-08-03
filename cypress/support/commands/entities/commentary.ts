import { AddCommentaryFormDataTestIds } from '~/features/AddCommentaryForm/constants';

const addCommentary = (commentaryText: string) => {
  cy.getByDataTestId(AddCommentaryFormDataTestIds.Input).clear().type(commentaryText);
  cy.getByDataTestId(AddCommentaryFormDataTestIds.Button).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addCommentary: (commentaryText: string) => Chainable<void>;
    }
  }
}

export { addCommentary };
