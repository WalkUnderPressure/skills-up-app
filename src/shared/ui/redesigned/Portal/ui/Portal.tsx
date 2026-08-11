import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  container?: HTMLElement;
} & PropsWithChildren;

const Portal = (props: PortalProps) => {
  const { children, container = document.body } = props;

  return createPortal(children, container);
};

export default Portal;
