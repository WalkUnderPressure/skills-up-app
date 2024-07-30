import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { routerConfig } from 'shared/config/routerConfig';

function AppRouter() {
  return (
    <div className='page-wrapper'>
      <Suspense fallback={<div>LOADING . . .</div>}>
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
