import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonSize, ButtonTheme } from '~/shared/ui/deprecated/Button';
import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { getRoutePost } from '~/shared/constants/appRoutes';
import { Avatar, AvatarSize } from '~/shared/ui/deprecated/Avatar';
import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/deprecated/AppLink';
import { Text } from '~/shared/ui/deprecated/Text';
import { Card } from '~/shared/ui/deprecated/Card';
import FullPostListItemSkeleton from './FullPostListItemSkeleton/FullPostListItemSkeleton';
import TextBlockElement from '../../../OnePost/PostBlocksGenerator/TextBlockElement';
import { PostBlockType, PostTextBlock } from '../../../../model/types/Post';
import { CommonPostListItemProps } from '../PostListItem';
import PostImagePreview from '../PostImagePreview';
import { HStack } from '~/shared/ui/deprecated/Stack';

import cls from './FullPostListItem.module.scss';
import EyeIcon from '~/shared/assets/icons/eye.svg';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';

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
          <Text title={post.title} titleDataTestId={BlogPageDataTestIds.FullPostListItemTitle} />
          <span>{post.tags.map((tag) => `#${tag}`).join(', ')}</span>
        </HStack>

        <PostImagePreview src={post.img} alt={post.subtitle} className={cls.poster} />

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
