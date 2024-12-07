import { memo } from 'react';

import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { getRoutePost } from '~/shared/constants/appRoutes';
import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/AppLink';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import ShortPostListItemSkeleton from './ShortPostListItemSkeleton/ShortPostListItemSkeleton';
import { CommonPostListItemProps } from '../PostListItem';
import { HStack } from '~/shared/ui/Stack';
import EyeIcon from '~/shared/assets/icons/eye.svg';
import cls from './ShortPostListItem.module.scss';

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
      to={getRoutePost(postId)}
      className={classNames(cls.link, {}, [className])}
    >
      <Card className={cls.card} onClick={onItemLinkClick}>
        <div className={classNames(cls['img-wrapper'])}>
          <Text className={classNames(cls['img-date'])} text={createdAt} />
          <img src={post.img} alt={post.subtitle} className={classNames(cls['image'])} />
        </div>

        <HStack justify="between" align="center" gap="24">
          <HStack align="center" justify="center" gap="8" className={classNames(cls['tags'])}>
            <span>{post.tags.map((tag) => `#${tag}`).join(', ')}</span>
          </HStack>

          <HStack justify="center" align="center" gap="8">
            <EyeIcon />
            {post.views}
          </HStack>
        </HStack>

        <Text title={post.title} className={classNames(cls['title'])} />
      </Card>
    </AppLink>
  );
});

export default ShortPostListItem;
