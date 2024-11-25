import { memo } from 'react';

import useDateTransformer from 'shared/lib/hooks/useDateTransformer';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import classNames from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import ShortPostListItemSkeleton from './ShortPostListItemSkeleton/ShortPostListItemSkeleton';
import { CommonPostListItemProps } from '../PostListItem';

import * as cls from './ShortPostListItem.module.scss';

import EyeIcon from 'shared/assets/icons/eye.svg';

type PostShortListItemProps = CommonPostListItemProps;

const ShortPostListItem = memo((props: PostShortListItemProps) => {
  const { className, post, isLoading = false, target, onItemLinkClick } = props;

  const createdAt = useDateTransformer(post?.createdAt);

  if (isLoading) {
    return <ShortPostListItemSkeleton />;
  }

  if (!post) {
    return null;
  }

  const postId = post.id;

  return (
    <AppLink
      target={target}
      to={`${RouterPaths[AppRoutes.POST]}${postId}`}
      className={classNames(cls.link, {}, [className])}
    >
      <Card className={cls.card} onClick={onItemLinkClick}>
        <div className={classNames(cls['img-wrapper'])}>
          <Text className={classNames(cls['img-date'])} text={createdAt} />
          <img src={post.img} alt={post.subtitle} className={classNames(cls['image'])} />
        </div>

        <div className={classNames(cls['info'])}>
          <div className={classNames(cls['tags'])}>
            <span>{post.tags.map((tag) => `#${tag}`).join(', ')}</span>
          </div>

          <div className={classNames(cls['views'])}>
            <EyeIcon />
            {post.views}
          </div>
        </div>

        <Text title={post.title} className={classNames(cls['title'])} />
      </Card>
    </AppLink>
  );
});

export default ShortPostListItem;
