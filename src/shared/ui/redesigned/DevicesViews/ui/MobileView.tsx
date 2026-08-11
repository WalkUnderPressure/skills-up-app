import { PropsWithChildren } from 'react';

import DeviceViewFactory, { AdditionalDevicesProps } from './DeviceViewFactory';

type MobileViewProps = AdditionalDevicesProps & PropsWithChildren;

const MobileView = (props: MobileViewProps) => {
  const { children, additional = [] } = props;

  return <DeviceViewFactory devices={['mobile', ...additional]}>{children}</DeviceViewFactory>;
};

export default MobileView;
