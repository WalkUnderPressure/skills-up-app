import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

type RenderWithRouterProps = MemoryRouterProps;

const RenderWithRouter = (props: RenderWithRouterProps) => {
  const { children, initialEntries = ['/'], ...restProps } = props;

  return (
    <MemoryRouter initialEntries={[...initialEntries]} {...restProps}>
      {children}
    </MemoryRouter>
  );
};

export { RenderWithRouter };
export type { RenderWithRouterProps };
