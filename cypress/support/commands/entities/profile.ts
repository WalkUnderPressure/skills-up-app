import { EditableProfileDataTestIds } from '~/features/EditableProfileCard/ui/EditableProfileCard.test-ids';
import { profilesApiRoutes } from '~/entities/Profile/api/profilesApiRoutes';
import { Profile } from '~/entities/Profile';

const updateProfile = (profileData: Partial<Profile>) => {
  const usernameForUpdate = profileData.username ?? '';

  cy.getByDataTestId(EditableProfileDataTestIds.editBtnDataTestId).click();
  cy.getByDataTestId('username').clear().type(usernameForUpdate);
  cy.getByDataTestId(EditableProfileDataTestIds.saveBtnDataTestId).click();
};

const resetProfile = (userId: string) => {
  const defaultTestUserUsername = 'user';

  cy.requestWithAuth({
    method: 'PATCH',
    url: profilesApiRoutes.byUserId(userId),
    data: {
      username: defaultTestUserUsername,
    },
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
