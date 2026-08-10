import { useEffect } from 'react';

import { useUserActions } from '~/entities/User';
import './styles/index.scss';

import '~/shared/config/i18n';
import DeprecatedApp from './components/DeprecatedApp';
import RedesignedApp from './components/RedesignedApp';
import { ToggleFeatures } from '~/entities/FeatureFlags';

const App = () => {
  const { initAuthData } = useUserActions();

  useEffect(() => {
    initAuthData();
  }, [initAuthData]);

  return <ToggleFeatures feature="redesign" on={<RedesignedApp />} off={<DeprecatedApp />} />;
};

export default App;
