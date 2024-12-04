import { Routes, Route } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';

import { routerConfig, AppRouteProps } from '~/shared/config/routerConfig';
import { PageLoader } from '~/widgets/PageLoader';
import RequireAuth from './RequireAuth';

const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
});

export default AppRouter;
