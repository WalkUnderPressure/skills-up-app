import { getRouteProfile } from '~/shared/constants/appRoutes';
import { getUserDataFromLS } from '../../common/getUserDataFromLS';
import { ProfilePageDataTestId } from '~/pages/ProfilePage/constants';
import { Profile } from '~/entities/Profile';

describe('Profile', () => {
  const visitProfilePage = () => {
    return cy.login().then(() => {
      const userData = getUserDataFromLS();
      cy.visit(getRouteProfile(userData.id));
    });
  };

  beforeEach(() => {
    visitProfilePage();
  });

  afterEach(() => {
    const userData = getUserDataFromLS();
    cy.resetProfile(userData.id);
  });

  it('Profile opens and has correct user data', () => {
    const userData = getUserDataFromLS();

    cy.getByDataTestId(ProfilePageDataTestId).should('exist');
    cy.getByDataTestId('username').should('have.value', userData.username);
  });

  it('Edit user profile data and save', () => {
    const newUserProfileData: Partial<Profile> = {
      username: 'TestUserName',
    };

    cy.updateProfile(newUserProfileData);

    cy.reload();
    visitProfilePage().then(() => {
      cy.getByDataTestId('username').should('have.value', newUserProfileData.username);
    });
  });
});
