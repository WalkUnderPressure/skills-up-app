import { HomePageDataTestId } from '~/pages/HomePage/constants';
import { SignInBtnDataTestId } from '~/widgets/Navbar/constants';
import { ProfilePageDataTestId } from '~/pages/ProfilePage/constants';
import { getRouteBlog, getRouteHome, getRouteProfile } from '~/shared/constants/appRoutes';
import { getUserDataFromLS } from 'cypress/common/getUserDataFromLS';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';

describe('Routing', () => {
  describe('User NOT Authorized', () => {
    it('User redirect to Home page when try to open restricted page', () => {
      cy.visit(getRouteProfile('1'));
      cy.getByDataTestId(HomePageDataTestId).should('contain.text', 'Home page');
    });

    it('Have SignIn button when user NOT Authorized', () => {
      cy.visit(getRouteHome());
      cy.getByDataTestId(SignInBtnDataTestId).should('exist');
    });
  });

  describe('User is Authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Open profile page', () => {
      const userData = getUserDataFromLS();

      cy.visit(getRouteProfile(userData.id));
      cy.getByDataTestId(ProfilePageDataTestId).should('exist');
    });

    it('Open blog page', () => {
      cy.visit(getRouteBlog());
      cy.getByDataTestId(BlogPageDataTestIds.Page).should('exist');
    });
  });
});
