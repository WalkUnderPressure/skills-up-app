const getDataTestIdSelector = (dataTestId: string) => {
  return `[data-testid="${dataTestId}"]`;
};

const getByDataTestId = (dataTestId: string) => {
  return cy.get(getDataTestIdSelector(dataTestId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      getByDataTestId: (dataTestId: string) => Chainable<JQuery<HTMLElement>>;
    }
  }
}

export { getByDataTestId };
