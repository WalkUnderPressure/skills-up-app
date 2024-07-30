import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { routerConfig } from 'shared/config/routerConfig';
import { Loader } from 'shared/ui/Loader';

function AppRouter() {
  return (
    <div className='page-wrapper'>
      <Suspense fallback={<Loader />}>
        <Routes>
          {Object.values(routerConfig).map((routeProps) => {
            const { path, element } = routeProps

            return (
              <Route key={path} path={path} element={element} />
            )
          })}
        </Routes>
      </Suspense>
    </div>
  )
}

export default AppRouter
