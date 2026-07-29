import { PropsWithChildren } from 'react';

import {
  TestStoreInitialReducers,
  TestStoreInitialState,
} from '~/shared/config/storybook/decorators/StoreDecorator';
import { StoreProvider, StoreStateSchema } from '~/app/providers/StoreProvider';
import { StoreReducersMapObject } from '~/app/providers/StoreProvider/schemas';

type RenderWithStoreProps = {
  initialState?: TestStoreInitialState;
  initialReducers?: TestStoreInitialReducers;
} & PropsWithChildren;

const RenderWithStore = (props: RenderWithStoreProps) => {
  const { children, initialState, initialReducers, ...restProps } = props;

  return (
    <StoreProvider
      initialState={initialState as StoreStateSchema}
      initialReducers={initialReducers as StoreReducersMapObject}
      {...restProps}
    >
      {children}
    </StoreProvider>
  );
};

export { RenderWithStore };
export type { RenderWithStoreProps };
