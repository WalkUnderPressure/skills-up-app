import { useEffect } from 'react';

import { useUserActions } from '~/entities/User';
import './styles/index.scss';

import '~/shared/config/i18n';
import { useToggleFeatures } from '~/entities/FeatureFlags';
import DeprecatedApp from './components/DeprecatedApp';
import RedesignedApp from './components/RedesignedApp';

const App = () => {
  const { initAuthData } = useUserActions();

  useEffect(() => {
    initAuthData();
  }, [initAuthData]);

  // TODO: Create ToggleFeatures components to cases like this
  const AppEl = useToggleFeatures({
    feature: 'redesign',
    on: () => <RedesignedApp />,
    off: () => <DeprecatedApp />,
  });

  return AppEl;
};

export default App;
