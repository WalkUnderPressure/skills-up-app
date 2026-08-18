import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useScrollKeeperActions } from '~/features/ScrollKeeper';
import { useInfiniteScroll } from '~/shared/lib/hooks/useInfiniteScroll';
import { useGetScrollByPath } from '~/features/ScrollKeeper';
import useThrottle from '~/shared/lib/hooks/useThrottle';
import classNames from '~/shared/lib/classNames';
import cls from './Page.module.scss';
import { useToggleFeatures } from '~/entities/User';

const SCROLL_SAVE_THROTTLE_DELAY = 300;

type PageProps = {
  children: ReactNode;
  onScrollEnd?: () => void;
} & PropsWithClassName &
  PropsWithDataTestId;

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd, 'data-testid': dataTestId = 'Page' } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { pathname } = useLocation();

  const { setScrollPosition } = useScrollKeeperActions();

  const scrollPosition = useGetScrollByPath(pathname);

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname,
    });
  }, SCROLL_SAVE_THROTTLE_DELAY);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const pageCls = useToggleFeatures({
    feature: 'redesign',
    on: () => cls['page-wrapper-redesigned'],
    off: () => cls['page-wrapper'],
  });

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(pageCls, {}, [className, 'page-wrapper'])}
      data-testid={dataTestId}
    >
      {children}

      {onScrollEnd && <div ref={triggerRef} className={classNames(cls.trigger)} />}
    </section>
  );
};
