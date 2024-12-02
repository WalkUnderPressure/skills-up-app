import { ReactNode, useCallback } from 'react';

import genericMemo from 'shared/lib/genericMemo';
import classNames from 'shared/lib/classNames';
import * as cls from './Tabs.module.scss';

export type TabItem<T extends string = string> = {
  value: T;
  content: ReactNode;
};

type TabsProps<T extends string = string> = {
  tabs: Array<TabItem<T>>;
  value: string;
  onTabClick: (tabValue: T) => void;
} & PropsWithClassName;

const Tabs = genericMemo(<T extends string = string>(props: TabsProps<T>) => {
  const { className, tabs, onTabClick, value } = props;

  const clickHandle = useCallback(
    (tabValue: T) => () => {
      onTabClick(tabValue);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => {
        const isActive = tab.value === value;

        return (
          <div
            key={tab.value}
            className={classNames(cls.tab, { [cls.active]: isActive })}
            onClick={clickHandle(tab.value)}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
});

export default Tabs;
