import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  container?: HTMLElement;
} & PropsWithChildren;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const Portal = (props: PortalProps) => {
  const { children, container = document.body } = props;

  return createPortal(children, container);
};

export default Portal;
