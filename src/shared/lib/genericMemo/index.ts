import { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const genericMemo: <Component extends React.FC<any>>(
  component: Component,
  compare?: (
    prevProps: React.ComponentPropsWithoutRef<Component>,
    newProps: React.ComponentPropsWithoutRef<Component>,
  ) => boolean,
) => Component = memo;

export default genericMemo;
