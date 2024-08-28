import { MutableRefObject, ReactNode, useRef } from 'react';

import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import classNames from 'shared/lib/classNames';
import * as cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls['page-wrapper'], {}, [className])}>
      {children}

      <div ref={triggerRef} />
    </section>
  );
};