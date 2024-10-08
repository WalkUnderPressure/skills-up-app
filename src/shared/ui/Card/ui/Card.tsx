import { HTMLAttributes, memo, PropsWithChildren } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Card.module.scss';

type CardProps = {
  className?: string;
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

const Card = memo((props: CardProps) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={classNames(cls['card'], {}, [className])} {...restProps}>
      {children}
    </div>
  );
});

export default Card;
