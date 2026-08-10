import { PropsWithChildren } from 'react';

import DeviceViewFactory, { AdditionalDevicesProps } from './DeviceViewFactory';

type MobileViewProps = AdditionalDevicesProps & PropsWithChildren;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const MobileView = (props: MobileViewProps) => {
  const { children, additional = [] } = props;

  return <DeviceViewFactory devices={['mobile', ...additional]}>{children}</DeviceViewFactory>;
};

export default MobileView;
