import { Suspense, useEffect } from 'react';

import { useUserActions, useUserIsInitialized } from '~/entities/User';
import { AppRouter } from '~/app/providers/AppRouter';
import classNames from '~/shared/lib/classNames';
import { Sidebar } from '~/widgets/Sidebar';
import { Navbar } from '~/widgets/Navbar';
import './styles/index.scss';

import '~/shared/config/i18n';

const App = () => {
  const isUserInitialized = useUserIsInitialized();

  const { initAuthData } = useUserActions();

  useEffect(() => {
    initAuthData();
  }, [initAuthData]);

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

export default App;
