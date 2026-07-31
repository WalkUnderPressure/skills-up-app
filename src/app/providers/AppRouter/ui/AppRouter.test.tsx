import { screen } from '@testing-library/react';

import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '~/shared/constants/appRoutes';
import { renderWithProviders } from '~/shared/config/tests/providers/renderWithProviders';
import { AboutPageDataTestId } from '~/pages/AboutPage/ui/AboutPage';
import { ProfilePageDataTestId } from '~/pages/ProfilePage/constants';
import { AdminPanelPageDataTestId } from '~/pages/AdminPanelPage/ui/AdminPanelPage';
import { ForbiddenPageDataTestId } from '~/pages/ForbiddenPage/ui/ForbiddenPage';
import { NotFoundPageDataTestId } from '~/pages/NotFoundPage/ui/NotFoundPage';
import { HomePageDataTestId } from '~/pages/HomePage/constants';
import AppRouter from './AppRouter';

describe('app/providers/AppRouter', () => {
  test('page should be rendered', async () => {
    renderWithProviders(<AppRouter />, {
      router: {
        initialEntries: [getRouteAbout()],
      },
    });

    const page = await screen.findByTestId(AboutPageDataTestId);
    expect(page).toBeInTheDocument();
  });

  test('page not found', async () => {
    renderWithProviders(<AppRouter />, {
      router: {
        initialEntries: ['/some-not-existing-page-url'],
      },
    });

    const page = await screen.findByTestId(NotFoundPageDataTestId);
    expect(page).toBeInTheDocument();
  });

  test('redirect unauthorized user to home page', async () => {
    renderWithProviders(<AppRouter />, {
      router: {
        initialEntries: [getRouteProfile('1')],
      },
    });

    const page = await screen.findByTestId(HomePageDataTestId);
    expect(page).toBeInTheDocument();
  });

  test('show page for authorized user', async () => {
    const USER_ID = '1';

    renderWithProviders(<AppRouter />, {
      router: {
        initialEntries: [getRouteProfile(USER_ID)],
      },
      store: {
        initialState: {
          user: { isInitialized: true, authData: { id: USER_ID } },
        },
      },
    });

    const page = await screen.findByTestId(ProfilePageDataTestId);
    expect(page).toBeInTheDocument();
  });

  test('access denied (required role missing)', async () => {
    renderWithProviders(<AppRouter />, {
      router: {
        initialEntries: [getRouteAdminPanel()],
      },
      store: {
        initialState: {
          user: { isInitialized: true, authData: { id: '1' } },
        },
      },
    });

    const page = await screen.findByTestId(ForbiddenPageDataTestId);
    expect(page).toBeInTheDocument();
  });

  test('access allowed (required role exist)', async () => {
    renderWithProviders(<AppRouter />, {
      router: {
        initialEntries: [getRouteAdminPanel()],
      },
      store: {
        initialState: {
          user: {
            isInitialized: true,
            authData: { id: '1', roles: ['ADMIN'] },
          },
        },
      },
    });

    const page = await screen.findByTestId(AdminPanelPageDataTestId);
    expect(page).toBeInTheDocument();
  });
});
