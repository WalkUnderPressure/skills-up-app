import { Suspense } from 'react';

import { useUserIsInitialized } from '~/entities/User';
import { AppRouter } from '~/app/providers/AppRouter';
import classNames from '~/shared/lib/classNames';
import { Sidebar } from '~/widgets/Sidebar';
import { Navbar } from '~/widgets/Navbar';

const RedesignedApp = () => {
  const isUserInitialized = useUserIsInitialized();

  return (
    <main className={classNames('app-redesigned')}>
      {/* Empty fallback="" need for smooth render */}
      <Suspense fallback="">
        <Navbar />

        <div className="page-layout">
          <Sidebar />
          {isUserInitialized && <AppRouter />}
        </div>
      </Suspense>
    </main>
  );
};

export default RedesignedApp;
