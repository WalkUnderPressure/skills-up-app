import { EditableProfileDataTestIds } from '~/features/EditableProfileCard/ui/EditableProfileCard.test-ids';
import { profilesApiRoutes } from '~/entities/Profile/api/profilesApiRoutes';
import { Profile } from '~/entities/Profile';
import { getUserDataFromLS } from 'cypress/common/getUserDataFromLS';
import { createAuthHeader } from '~/shared/api/common';

const updateProfile = (profileData: Partial<Profile>) => {
  const usernameForUpdate = profileData.username ?? '';

  cy.getByDataTestId(EditableProfileDataTestIds.editBtnDataTestId).click();
  cy.getByDataTestId('username').clear().type(usernameForUpdate);
  cy.getByDataTestId(EditableProfileDataTestIds.saveBtnDataTestId).click();
};

const resetProfile = (userId: string) => {
  cy.env(['API_URL', 'auth']).then(({ API_URL }) => {
    const defaultTestUserUsername = 'user';
    const userData = getUserDataFromLS();
    const authToken = userData.id;

    const requestHeaders = createAuthHeader(authToken);

    cy.request({
      method: 'PATCH',
      url: `${API_URL}${profilesApiRoutes.byUserId(userId)}`,
      headers: requestHeaders,
      body: {
        username: defaultTestUserUsername,
      },
    });
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (profileData: Partial<Profile>) => Chainable<void>;
      resetProfile: (profileId: string) => Chainable<void>;
    }
  }
}

export { updateProfile, resetProfile };
