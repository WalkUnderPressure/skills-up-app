import { StoreProvider, StoreProviderProps } from 'app/providers/StoreProvider';

type RenderWithStoreProps = StoreProviderProps;

const RenderWithStore = (props: RenderWithStoreProps) => {
  const { children, ...restProps } = props;

  return <StoreProvider {...restProps}>{children}</StoreProvider>;
};

export { RenderWithStore };
export type { RenderWithStoreProps };
