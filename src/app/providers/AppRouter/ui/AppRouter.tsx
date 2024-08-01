import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { routerConfig } from 'shared/config/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Routes>
        {Object.values(routerConfig).map((routeProps) => {
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
};

export default AppRouter;
