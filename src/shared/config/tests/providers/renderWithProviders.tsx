import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { RenderWithTranslate, RenderWithTranslateProps } from './RenderWithTranslate';
import { RenderWithRouter, RenderWithRouterProps } from './RenderWithRouter';

type ProvidersOptions = {
  router?: RenderWithRouterProps;
  translations?: RenderWithTranslateProps;
};

function renderWithProviders(component: ReactNode, providersOptions: ProvidersOptions = {}) {
  const { router = {}, translations = {} } = providersOptions;

  render(
    <RenderWithRouter {...router}>
      <RenderWithTranslate {...translations}>{component}</RenderWithTranslate>
    </RenderWithRouter>,
  );
}

export { renderWithProviders };
