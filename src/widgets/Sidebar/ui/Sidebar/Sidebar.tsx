import { memo } from 'react';

import { SidebarDataTestIdProps } from '../../constants';

import { ToggleFeatures } from '~/entities/FeatureFlags';
import SidebarRedesigned from './SidebarRedesigned';
import SidebarDeprecated from './SidebarDeprecated';

type SidebarProps = SidebarDataTestIdProps & PropsWithClassName;

const Sidebar = memo((props: SidebarProps) => {
  const { className, sidebarDataTestId, switcherDataTestId } = props;

  return (
    <ToggleFeatures
      feature="redesign"
      on={<SidebarRedesigned className={className} />}
      off={
        <SidebarDeprecated
          sidebarDataTestId={sidebarDataTestId}
          switcherDataTestId={switcherDataTestId}
          className={className}
        />
      }
    />
  );
});

export default Sidebar;
