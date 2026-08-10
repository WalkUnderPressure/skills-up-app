import { useEffect } from 'react';

import { useUserActions, useUserIsInitialized } from '~/entities/User';
import './styles/index.scss';

import '~/shared/config/i18n';
import AppDeprecated from './components/AppDeprecated';
import AppRedesigned from './components/AppRedesigned';
import { ToggleFeatures } from '~/entities/FeatureFlags';

const App = () => {
  const { initAuthData } = useUserActions();
  const isUserInitialized = useUserIsInitialized();

  useEffect(() => {
    initAuthData();
  }, [initAuthData]);

  if (!isUserInitialized) {
    return null;
  }

  return <ToggleFeatures feature="redesign" on={<AppRedesigned />} off={<AppDeprecated />} />;
};

export default App;
