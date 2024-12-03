import { PropsWithChildren } from 'react';

import DeviceViewFactory, { AdditionalDevicesProps } from './DeviceViewFactory';

type DesktopViewProps = AdditionalDevicesProps & PropsWithChildren;

const DesktopView = (props: DesktopViewProps) => {
  const { children, additional = [] } = props;

  return <DeviceViewFactory devices={['desktop', ...additional]}>{children}</DeviceViewFactory>;
};

export default DesktopView;
