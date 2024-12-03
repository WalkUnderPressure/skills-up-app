import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Overlay.module.scss';

export type OverlayProps = {
  onClick?: () => void;
} & PropsWithClassName;

const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return <div onClick={onClick} className={classNames(cls.overlay, {}, [className])} />;
});

export default Overlay;
