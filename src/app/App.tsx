import { Suspense } from 'react';

import { AppRouter } from 'app/providers/AppRouter';
import classNames from 'shared/lib/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';

import 'shared/config/i18n';

const App = () => {
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
