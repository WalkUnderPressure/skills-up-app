import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { StoreStateSchema, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getScrollByPath, scrollKeeperActions } from 'features/ScrollKeeper';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import useThrottle from 'shared/lib/hooks/useThrottle';
import classNames from 'shared/lib/classNames';
import * as cls from './Page.module.scss';

const SCROLL_SAVE_THROTTLE_DELAY = 300;

type PageProps = {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
};

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const scrollPosition = useAppSelector((state: StoreStateSchema) => {
    return getScrollByPath(state, pathname);
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollKeeperActions.setScrollPosition({
        position: event.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, SCROLL_SAVE_THROTTLE_DELAY);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls['page-wrapper'], {}, [className])}
    >
      {children}

      {onScrollEnd && <div ref={triggerRef} className={classNames(cls.trigger)} />}
    </section>
  );
};
