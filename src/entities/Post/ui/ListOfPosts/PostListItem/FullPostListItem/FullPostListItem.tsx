import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import useDateTransformer from 'shared/lib/hooks/useDateTransformer';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import classNames from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import FullPostListItemSkeleton from './FullPostListItemSkeleton/FullPostListItemSkeleton';
import TextBlockElement from '../../../OnePost/PostBlocksGenerator/TextBlockElement';
import { PostBlockType, PostTextBlock } from '../../../../model/types/Post';
import { CommonPostListItemProps } from '../PostListItem';

import * as cls from './FullPostListItem.module.scss';

import EyeIcon from 'shared/assets/icons/eye.svg';

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
    <div className={classNames(cls['card-wrapper'], {}, [className])}>
      <Card className={cls.card}>
        <div className={cls.header}>
          <div className={cls['header-info']}>
            {post.profile?.avatar && (
              <Avatar size={AvatarSize.XS} src={post.profile.avatar || ''} />
            )}

            <Text text={post?.profile?.username} />
          </div>

          <span>{createdAt}</span>
        </div>

        <div className={cls.title}>
          <Text title={post.title} />
          <span>{post.tags.map((tag) => `#${tag}`).join(', ')}</span>
        </div>

        <img className={cls.poster} src={post.img} alt={post.subtitle} />

        <TextBlockElement className={cls.text} block={textBlock} hideTitle={true} />

        <div className={cls.footer}>
          <Button
            size={ButtonSize.L}
            theme={ButtonTheme.OUTLINE_INVERTED}
            rounded={ButtonRounded.M}
            onClick={onItemLinkClick}
          >
            <AppLink to={`${RouterPaths[AppRoutes.POST]}${postId}`} target={target}>
              {t('read-more', { defaultValue: 'Read more' }) + '...'}
            </AppLink>
          </Button>

          <div className={cls['footer-info']}>
            <EyeIcon />
            {post.views}
          </div>
        </div>
      </Card>
    </div>
  );
});

export default FullPostListItem;
