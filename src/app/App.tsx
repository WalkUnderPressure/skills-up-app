import { Suspense, useEffect } from 'react';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { AppRouter } from 'app/providers/AppRouter';
import classNames from 'shared/lib/classNames';
import { userActions } from 'entities/User';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';

import 'shared/config/i18n';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <main className={classNames('app')}>
      {/* Empty fallback="" need for smooth render */}
      <Suspense fallback="">
        <Navbar />

        <div className="page-layout">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </main>
  );
};

export default App;
