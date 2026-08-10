import { PropsWithChildren } from 'react';

import DeviceViewFactory, { AdditionalDevicesProps } from './DeviceViewFactory';

type TabletViewProps = AdditionalDevicesProps & PropsWithChildren;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const TabletView = (props: TabletViewProps) => {
  const { children, additional = [] } = props;

  return <DeviceViewFactory devices={['tablet', ...additional]}>{children}</DeviceViewFactory>;
};

export default TabletView;
