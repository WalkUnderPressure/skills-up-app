import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button as ButtonDeprecated,
  ButtonRounded,
  ButtonSize,
  ButtonTheme,
} from '~/shared/ui/deprecated/Button';
import { Button } from '~/shared/ui/redesigned/Button';
import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { getRoutePost } from '~/shared/constants/appRoutes';
import { Avatar, AvatarSize } from '~/shared/ui/deprecated/Avatar';
import classNames from '~/shared/lib/classNames';
import { AppLink as AppLinkDeprecated } from '~/shared/ui/deprecated/AppLink';
import { AppLink } from '~/shared/ui/redesigned/AppLink';
import { Text as TextDeprecated } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import { Card as CardDeprecated } from '~/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '~/shared/ui/redesigned/Card';
import FullPostListItemSkeleton from './FullPostListItemSkeleton/FullPostListItemSkeleton';
import TextBlockElement from '../../../OnePost/PostBlocksGenerator/TextBlockElement';
import { PostBlockType } from '../../../../model/types/Post';
import { CommonPostListItemProps } from '../PostListItem';
import PostImagePreview from '../PostImagePreview';
import { HStack } from '~/shared/ui/redesigned/Stack';

import cls from './FullPostListItem.module.scss';
import EyeIcon from '~/shared/assets/icons/eye.svg';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import { ToggleFeatures, useToggleFeatures } from '~/entities/User';

type PostFullListItemProps = CommonPostListItemProps;

const FullPostListItem = memo((props: PostFullListItemProps) => {
  const { className, post, isLoading = false, target, onItemLinkClick } = props;

  const { t } = useTranslation('pages.blog');

  const createdAt = useDateTransformer(post?.createdAt);

  const firstTextBlock = post?.blocks?.find((block) => block.type === PostBlockType.TEXT) ?? null;

  const textBlock = useToggleFeatures({
    feature: 'redesign',
    on: () => {
      if (!firstTextBlock) {
        return null;
      }

      return {
        ...firstTextBlock,
        paragraphs: firstTextBlock.paragraphs.slice(0, 1),
      };
    },
    off: () => firstTextBlock,
  });

  const cardCls = useToggleFeatures({
    feature: 'redesign',
    on: () => cls['card-redesigned'],
    off: () => cls.card,
  });

  const { Card, Text } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Card: CardRedesigned,
      Text: TextRedesigned,
    }),
    off: () => ({
      Card: CardDeprecated,
      Text: TextDeprecated,
    }),
  });

  if (isLoading) {
    return <FullPostListItemSkeleton className={className} />;
  }

  if (!post) {
    return null;
  }

  const postId = post?.id;

  return (
    <HStack fullW className={classNames('', {}, [className])}>
      <Card className={cardCls}>
        <HStack justify="between" align="center" gap="32">
          <HStack align="center" gap="8">
            {post.profile?.avatar && (
              <Avatar size={AvatarSize.XS} src={post.profile.avatar || ''} />
            )}

            <Text text={post?.profile?.username} />
          </HStack>

          <Text text={createdAt} />
        </HStack>

        <HStack justify="between" align="center" gap="32">
          <Text title={post.title} titleDataTestId={BlogPageDataTestIds.FullPostListItemTitle} />

          <Text text={post.tags.map((tag) => `#${tag}`).join(', ')} />
        </HStack>

        <PostImagePreview src={post.img} alt={post.subtitle} className={cls.poster} />

        {textBlock && <TextBlockElement className={cls.text} block={textBlock} hideTitle={true} />}

        <HStack justify="between" align="center" gap="32">
          <ToggleFeatures
            feature="redesign"
            on={
              <Button variant="clear" onClick={onItemLinkClick}>
                <AppLink to={getRoutePost(postId)} variant="secondary" target={target}>
                  {t('read-more', { defaultValue: 'Read more' }) + '...'}
                </AppLink>
              </Button>
            }
            off={
              <ButtonDeprecated
                size={ButtonSize.L}
                theme={ButtonTheme.OUTLINE_INVERTED}
                rounded={ButtonRounded.M}
                onClick={onItemLinkClick}
              >
                <AppLinkDeprecated to={getRoutePost(postId)} target={target}>
                  {t('read-more', { defaultValue: 'Read more' }) + '...'}
                </AppLinkDeprecated>
              </ButtonDeprecated>
            }
          />

          <HStack align="center" gap="8">
            <EyeIcon width={24} height={24} fill="currentColor" />

            <Text text={String(post.views)} />
          </HStack>
        </HStack>
      </Card>
    </HStack>
  );
});

export default FullPostListItem;
