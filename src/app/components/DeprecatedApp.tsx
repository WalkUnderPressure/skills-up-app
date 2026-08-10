import { Suspense } from 'react';

import { useUserIsInitialized } from '~/entities/User';
import { AppRouter } from '~/app/providers/AppRouter';
import classNames from '~/shared/lib/classNames';
import { Sidebar } from '~/widgets/Sidebar';
import { Navbar } from '~/widgets/Navbar';

const DeprecatedApp = () => {
  const isUserInitialized = useUserIsInitialized();

  return (
    <main className={classNames('app')}>
      {/* Empty fallback="" need for smooth render */}
      <Suspense fallback="">
        <Navbar />

        <div className="page-layout">
          <Sidebar />

          {/* Maybe in future wrap all App */}
          {isUserInitialized && <AppRouter />}
        </div>
      </Suspense>
    </main>
  );
};

export default DeprecatedApp;
