import { PropsWithChildren } from 'react';

import { RenderWithTranslate, RenderWithTranslateProps } from './RenderWithTranslate';
import { RenderWithRouter, RenderWithRouterProps } from './RenderWithRouter';
import { RenderWithStore, RenderWithStoreProps } from './RenderWithStore';

export type ProvidersOptions = {
  router?: RenderWithRouterProps;
  translations?: RenderWithTranslateProps;
  store?: RenderWithStoreProps;
};

type TestProvidersWrapperProps = {
  options: ProvidersOptions;
} & PropsWithChildren;

const TestProvidersWrapper = (props: TestProvidersWrapperProps) => {
  const { children, options: providersOptions } = props;

  const { router = {}, translations = {}, store = {} } = providersOptions;

  return (
    <RenderWithRouter {...router}>
      <RenderWithStore {...store}>
        <RenderWithTranslate {...translations}>{children}</RenderWithTranslate>
      </RenderWithStore>
    </RenderWithRouter>
  );
};

export default TestProvidersWrapper;
