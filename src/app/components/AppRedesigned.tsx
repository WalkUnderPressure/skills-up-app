import { Suspense } from 'react';

import { MainLayout } from '~/shared/layouts/MainLayout';
import { AppRouter } from '~/app/providers/AppRouter';
import classNames from '~/shared/lib/classNames';
import { Sidebar } from '~/widgets/Sidebar';
import { Navbar } from '~/widgets/Navbar';

const AppRedesigned = () => {
  return (
    <main className={classNames('app-redesigned')}>
      {/* Empty fallback="" need for smooth render */}
      <Suspense fallback="">
        <MainLayout sidebar={<Sidebar />} content={<AppRouter />} header={<Navbar />} />
      </Suspense>
    </main>
  );
};

export default AppRedesigned;
