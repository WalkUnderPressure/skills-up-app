import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonSize, ButtonTheme } from '~/shared/ui/Button';
import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { getRoutePost } from '~/shared/constants/appRoutes';
import { Avatar, AvatarSize } from '~/shared/ui/Avatar';
import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/AppLink';
import { Text } from '~/shared/ui/Text';
import { Card } from '~/shared/ui/Card';
import FullPostListItemSkeleton from './FullPostListItemSkeleton/FullPostListItemSkeleton';
import TextBlockElement from '../../../OnePost/PostBlocksGenerator/TextBlockElement';
import { PostBlockType, PostTextBlock } from '../../../../model/types/Post';
import { CommonPostListItemProps } from '../PostListItem';

import cls from './FullPostListItem.module.scss';

import EyeIcon from '~/shared/assets/icons/eye.svg';
import { HStack } from '~/shared/ui/Stack';

type PostFullListItemProps = CommonPostListItemProps;

const FullPostListItem = memo((props: PostFullListItemProps) => {
  const { className, post, isLoading = false, target, onItemLinkClick } = props;

  const { t } = useTranslation('pages.blog');

  const createdAt = useDateTransformer(post?.createdAt);

  if (isLoading) {
    return <FullPostListItemSkeleton className={className} />;
  }

  if (!post) {
    return null;
  }

  const postId = post?.id;

  const textBlock = post?.blocks?.find(
    (block) => block.type === PostBlockType.TEXT,
  ) as PostTextBlock;

  return (
    <HStack fullW className={classNames('', {}, [className])}>
      <Card className={cls.card}>
        <HStack justify="between" align="center" gap="32">
          <HStack align="center" gap="8">
            {post.profile?.avatar && (
              <Avatar size={AvatarSize.XS} src={post.profile.avatar || ''} />
            )}

            <Text text={post?.profile?.username} />
          </HStack>

          <span>{createdAt}</span>
        </HStack>

        <HStack justify="between" align="center" gap="32">
          <Text title={post.title} />
          <span>{post.tags.map((tag) => `#${tag}`).join(', ')}</span>
        </HStack>

        <img className={cls.poster} src={post.img} alt={post.subtitle} />

        <TextBlockElement className={cls.text} block={textBlock} hideTitle={true} />

        <HStack justify="between" align="center" gap="32">
          <Button
            size={ButtonSize.L}
            theme={ButtonTheme.OUTLINE_INVERTED}
            rounded={ButtonRounded.M}
            onClick={onItemLinkClick}
          >
            <AppLink to={getRoutePost(postId)} target={target}>
              {t('read-more', { defaultValue: 'Read more' }) + '...'}
            </AppLink>
          </Button>

          <HStack align="center" gap="8">
            <EyeIcon />
            {post.views}
          </HStack>
        </HStack>
      </Card>
    </HStack>
  );
});

export default FullPostListItem;
