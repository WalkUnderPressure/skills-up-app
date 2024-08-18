import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';

import { useAppSelector } from 'app/providers/StoreProvider';
import { routerConfig } from 'shared/config/routerConfig';
import { getUserAuthData } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = memo(() => {
  const isAuthorized = useAppSelector(getUserAuthData);

  const routes = useMemo(
    () => Object.values(routerConfig).filter(({ authOnly }) => (authOnly ? isAuthorized : true)),
    [isAuthorized],
  );

  return (
    <div className="page-wrapper">
      <Routes>
        {routes.map((routeProps) => {
          const { path, element } = routeProps;

          return (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
            />
          );
        })}
      </Routes>
    </div>
  );
});

export default AppRouter;
