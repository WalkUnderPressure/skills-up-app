import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { RenderWithTranslate, RenderWithTranslateProps } from './RenderWithTranslate';
import { RenderWithRouter, RenderWithRouterProps } from './RenderWithRouter';
import { RenderWithStore, RenderWithStoreProps } from './RenderWithStore';

type ProvidersOptions = {
  router?: RenderWithRouterProps;
  translations?: RenderWithTranslateProps;
  store?: RenderWithStoreProps;
};

function renderWithProviders(component: ReactNode, providersOptions: ProvidersOptions = {}) {
  const { router = {}, translations = {}, store = {} } = providersOptions;

  render(
    <RenderWithStore {...store}>
      <RenderWithRouter {...router}>
        <RenderWithTranslate {...translations}>{component}</RenderWithTranslate>
      </RenderWithRouter>
    </RenderWithStore>,
  );
}

export { renderWithProviders };
