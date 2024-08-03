import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';

type RoutingProviderProps = BrowserRouterProps;

const RoutingProvider = (props: RoutingProviderProps) => {
  const { children } = props;

  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RoutingProvider;
