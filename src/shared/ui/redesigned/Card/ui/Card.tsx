import { HTMLAttributes, memo, PropsWithChildren } from 'react';

import classNames from '~/shared/lib/classNames';
import cls from './Card.module.scss';

type CardPadding = 'p-16' | 'p-24' | 'p-32';

type CardProps = {
  fullW?: boolean;
  padding?: CardPadding;
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  PropsWithClassName;

const Card = memo((props: CardProps) => {
  const { className, children, fullW = false, padding = 'p-16', ...restProps } = props;

  return (
    <div
      className={classNames(
        cls['card'],
        {
          [cls['full-w']]: fullW,
        },
        [className, cls[padding]],
      )}
      {...restProps}
    >
      {children}
    </div>
  );
});

export default Card;
