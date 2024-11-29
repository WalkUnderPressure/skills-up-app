import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { RenderWithTranslate, RenderWithTranslateProps } from './RenderWithTranslate';
import { RenderWithRouter, RenderWithRouterProps } from './RenderWithRouter';
import { RenderWithStore, RenderWithStoreProps } from './RenderWithStore';

export type ProvidersOptions = {
  router?: RenderWithRouterProps;
  translations?: RenderWithTranslateProps;
  store?: RenderWithStoreProps;
};

function renderWithProviders(component: ReactNode, providersOptions: ProvidersOptions = {}) {
  const { router = {}, translations = {}, store = {} } = providersOptions;

  render(
    <RenderWithRouter {...router}>
      <RenderWithTranslate {...translations}>
        <RenderWithStore {...store}>{component}</RenderWithStore>
      </RenderWithTranslate>
    </RenderWithRouter>,
  );
}

export { renderWithProviders };
