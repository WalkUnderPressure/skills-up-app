import { memo } from 'react';

import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { getRoutePost } from '~/shared/constants/appRoutes';
import classNames from '~/shared/lib/classNames';
import { Card as CardDeprecated } from '~/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '~/shared/ui/redesigned/Card';
import { Text as TextDeprecated } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import { AppLink as AppLinkDeprecated } from '~/shared/ui/deprecated/AppLink';
import { AppLink as AppLinkRedesigned } from '~/shared/ui/redesigned/AppLink';
import ShortPostListItemSkeleton from './ShortPostListItemSkeleton/ShortPostListItemSkeleton';
import { CommonPostListItemProps } from '../PostListItem';
import PostImagePreview from '../PostImagePreview';
import { HStack } from '~/shared/ui/redesigned/Stack';
import EyeIcon from '~/shared/assets/icons/eye.svg';
import cls from './ShortPostListItem.module.scss';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import { useToggleFeatures } from '~/entities/FeatureFlags';

type PostShortListItemProps = CommonPostListItemProps;

const ShortPostListItem = memo((props: PostShortListItemProps) => {
  const { className, post, isLoading = false, target, onItemLinkClick } = props;

  const createdAt = useDateTransformer(post?.createdAt);

  const cardTextCls = useToggleFeatures({
    feature: 'redesign',
    on: () => '',
    off: () => cls['card-text'],
  });

  const { Card, Text, AppLink } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      AppLink: AppLinkRedesigned,
      Text: TextRedesigned,
      Card: CardRedesigned,
    }),
    off: () => ({
      AppLink: AppLinkDeprecated,
      Text: TextDeprecated,
      Card: CardDeprecated,
    }),
  });

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
      <Card className={classNames(cls.card, {}, [cardTextCls])} onClick={onItemLinkClick}>
        <div className={classNames(cls['img-wrapper'])}>
          <Text className={classNames(cls['img-date'])} text={createdAt} />

          <PostImagePreview src={post.img} alt={post.subtitle} className={cls['image']} />
        </div>

        <HStack justify="between" align="center" gap="24">
          <HStack align="center" justify="center" gap="8" className={classNames(cls['tags'])}>
            <Text text={post.tags.map((tag) => `#${tag}`).join(', ')} />
          </HStack>

          <HStack justify="center" align="center" gap="8">
            <EyeIcon width={24} height={24} fill="currentColor" />
            <Text text={String(post.views)} />
          </HStack>
        </HStack>

        <Text
          title={post.title}
          className={classNames(cls['title'])}
          titleDataTestId={BlogPageDataTestIds.ShortPostListItemTitle}
        />
      </Card>
    </AppLink>
  );
});

export default ShortPostListItem;
