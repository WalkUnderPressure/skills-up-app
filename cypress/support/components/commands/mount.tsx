import { MountOptions, MountReturn, mount as reactMount } from 'cypress/react';
import { ReactNode } from 'react';

import '~/app/styles/index.scss';

import { DEFAULT_THEME, ThemeProvider, ThemesMapKey } from '~/app/providers/ThemeProvider';
import TestProvidersWrapper, {
  ProvidersOptions,
} from '~/shared/config/tests/providers/TestProvidersWrapper';

type MountParams = {
  mountOptions?: {
    options?: MountOptions;
    rerenderKey?: string;
  };
  providerOptions?: ProvidersOptions;
  initTheme?: ThemesMapKey;
};

const mount = (component: ReactNode, params?: MountParams) => {
  const { mountOptions = {}, providerOptions = {}, initTheme = DEFAULT_THEME } = params ?? {};

  return reactMount(
    <>
      <ThemeProvider initTheme={initTheme}>
        <TestProvidersWrapper options={providerOptions}>{component}</TestProvidersWrapper>
      </ThemeProvider>
    </>,
    mountOptions.options,
    mountOptions.rerenderKey,
  );
};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: (component: ReactNode, params?: MountParams) => Cypress.Chainable<MountReturn>;
    }
  }
}

export { mount };
