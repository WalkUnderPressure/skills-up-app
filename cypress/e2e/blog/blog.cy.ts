import { getDataTestIdSelector } from 'cypress/support/commands/elements';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import { getRouteBlog } from '~/shared/constants/appRoutes';

describe('Check work of Blog page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(getRouteBlog());
    });
  });

  it('Show required UI elements', () => {
    cy.getByDataTestId(BlogPageDataTestIds.Page).should('exist');
    cy.getByDataTestId(BlogPageDataTestIds.List).should('exist');

    Object.values(BlogPageDataTestIds.SearchAndFilters).forEach((blogPageItemDataTestId) => {
      cy.getByDataTestId(blogPageItemDataTestId).should('exist');
    });
  });

  it('Search works correct', () => {
    const searchPostName = 'Javascript';

    cy.getByDataTestId(BlogPageDataTestIds.SearchAndFilters.Input).clear().type(searchPostName);

    cy.wait(5000); // wait backend find posts

    cy.getByDataTestId(BlogPageDataTestIds.List)
      .find(getDataTestIdSelector(BlogPageDataTestIds.ShortPostListItemTitle))
      .contains(searchPostName)
      .should('exist');
  });

  // TODO: Add test
  it('Sort works correct', () => {});
});
