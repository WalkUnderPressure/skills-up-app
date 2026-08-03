import EditableProfileCard from '~/features/EditableProfileCard/ui/EditableProfileCard';
import { profileReducer } from '~/features/EditableProfileCard';

const ProfileUserId = '1';

describe('<EditableProfileCard />', () => {
  beforeEach(() => {
    cy.interceptFixture('GET', '**/profiles/*', 'profile.json').as('Profile data');
  });

  it('renders', () => {
    // Prepare all data to test
    cy.mount(<EditableProfileCard profileUserId={ProfileUserId} />, {
      providerOptions: {
        store: {
          initialReducers: {
            profile: profileReducer,
          },
          initialState: {
            user: {
              authData: {
                id: ProfileUserId,
                roles: ['USER'],
              },
            },
          },
        },
      },
    });

    // TODO: Write actions to check work of EditableProfileCard
  });
});
