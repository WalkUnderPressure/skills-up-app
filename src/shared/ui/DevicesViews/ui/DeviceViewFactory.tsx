import { PropsWithChildren } from 'react';

import useDeviceDetect, { DeviceType } from 'shared/lib/hooks/useDeviceDetect';

export type AdditionalDevicesProps = {
  additional?: Array<DeviceType>;
};

type DeviceViewFactoryProps = {
  devices: Array<DeviceType>;
} & PropsWithChildren;

const DeviceViewFactory = (props: DeviceViewFactoryProps) => {
  const { children, devices: targetDevices = ['desktop'] } = props;

  const { device: currentDevice } = useDeviceDetect();

  return targetDevices.includes(currentDevice) ? children : null;
};

export default DeviceViewFactory;
