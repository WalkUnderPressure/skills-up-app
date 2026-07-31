import { User } from '~/entities/User';
import { getByDataTestId } from '../common';
import { HomePageDataTestId } from '~/pages/HomePage/constants';
import { LS_AUTH_USER } from '~/shared/constants/localStorage';
import safeJsonParse from '~/shared/lib/helpers/safeJsonParse';
import { SignInBtnDataTestId } from '~/widgets/Navbar/constants';
import { ProfilePageDataTestId } from '~/pages/ProfilePage/constants';

describe('Routing', () => {
  describe.skip('User NOT Authorized', () => {
    it('User redirect to Home page when try to open restricted page', () => {
      cy.visit('/profile/1');
      cy.get(getByDataTestId(HomePageDataTestId)).should('contain.text', 'Home page');
    });

    it('Have SignIn button when user NOT Authorized', () => {
      cy.visit('/');
      cy.get(getByDataTestId(SignInBtnDataTestId)).should('exist');
    });
  });

  describe('User is Authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Open profile page', () => {
      const userData = safeJsonParse<User>(localStorage.getItem(LS_AUTH_USER));

      cy.visit(`/profile/${userData.id}`);
      cy.get(getByDataTestId(ProfilePageDataTestId)).should('exist');
    });
  });
});
