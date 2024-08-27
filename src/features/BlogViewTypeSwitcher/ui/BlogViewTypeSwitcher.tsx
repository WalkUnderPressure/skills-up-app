import { memo, useCallback } from 'react';

import { Button, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import { PostViewMap, PostViewKey } from 'entities/Post';
import * as cls from './BlogViewTypeSwitcher.module.scss';

import ListedIcon from 'shared/assets/icons/listed.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';

const ViewTypesList: Record<PostViewKey, { name: PostViewKey; Icon: SvgIconType }> = {
  [PostViewMap.FULL]: {
    name: PostViewMap.FULL,
    Icon: ListedIcon,
  },
  [PostViewMap.SHORT]: {
    name: PostViewMap.SHORT,
    Icon: TiledIcon,
  },
};

type BlogViewTypeSwitcherProps = {
  className?: string;
  viewType: PostViewKey;
  onChangeView: (nextView: PostViewKey) => void;
};

const BlogViewTypeSwitcher = memo((props: BlogViewTypeSwitcherProps) => {
  const { className, viewType, onChangeView } = props;

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => () => {
      onChangeView(nextViewType);
    },
    [onChangeView],
  );

  return (
    <div className={classNames(cls['switcher'], {}, [className])}>
      {Object.values(ViewTypesList).map((viewInfo) => {
        const { name, Icon } = viewInfo;

        const isActive = name === viewType;

        return (
          <Button
            key={name}
            theme={ButtonTheme.CLEAR}
            onClick={isActive ? undefined : changeViewType(name)}
          >
            <Icon className={classNames(cls.icon, { [cls.active]: isActive })} />
          </Button>
        );
      })}
    </div>
  );
});

export default BlogViewTypeSwitcher;
