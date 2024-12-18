import { memo, useCallback } from 'react';

import { PostViewMap, PostViewKey } from '~/entities/Post';
import ListedIcon from '~/shared/assets/icons/listed.svg';
import { Button, ButtonTheme } from '~/shared/ui/Button';
import TiledIcon from '~/shared/assets/icons/tiled.svg';
import classNames from '~/shared/lib/classNames';
import { HStack } from '~/shared/ui/Stack';
import cls from './BlogViewTypeSwitcher.module.scss';

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
  viewType: PostViewKey;
  onChangeView: (nextView: PostViewKey) => void;
} & PropsWithClassName;

const BlogViewTypeSwitcher = memo((props: BlogViewTypeSwitcherProps) => {
  const { className, viewType, onChangeView } = props;

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => () => {
      onChangeView(nextViewType);
    },
    [onChangeView],
  );

  return (
    <HStack
      gap="4"
      justify="center"
      align="center"
      className={classNames(cls['switcher'], {}, [className])}
    >
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
    </HStack>
  );
});

export default BlogViewTypeSwitcher;
