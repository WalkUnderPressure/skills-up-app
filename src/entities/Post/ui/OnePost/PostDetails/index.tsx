import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { postDetailsReducer } from '../../../model/slices/postDetailsSlice';
import { useFetchPostById } from '../../../model/services/fetchPostById';
import {
  usePostError,
  usePostDetails,
  usePostIsLoading,
} from '../../../model/selectors/postDetailsSelectors';
import PostBlocksGenerator from '../PostBlocksGenerator';
import { Text as TextDeprecated, TextTheme } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import PostDetailsSkeleton from '../PostDetailsSkeleton';
import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import cls from './PostDetails.module.scss';

import CalendarIcon from '~/shared/assets/icons/calendar.svg';
import EyeIcon from '~/shared/assets/icons/eye.svg';
import { AppImage } from '~/shared/ui/redesigned/AppImage';
import { ToggleFeatures, useToggleFeatures } from '~/entities/User';

const reducers: ReducersMap = {
  postDetails: postDetailsReducer,
};

type PostDetailsProps = {
  postId?: string;
} & PropsWithClassName;

const PostDetails = memo((props: PostDetailsProps) => {
  const { className, postId } = props;

  const { t } = useTranslation('pages.blog');

  const isPostLoading = usePostIsLoading();
  const postDetails = usePostDetails();
  const postError = usePostError();

  const fetchPostById = useFetchPostById();

  useEffect(() => {
    if (postId) {
      fetchPostById({ postId });
    }
  }, [fetchPostById, postId]);

  const createdAt = useDateTransformer(Number(postDetails?.createdAt));

  const { Text, infoIconCls } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Text: TextRedesigned,
      infoIconCls: cls['info-icon-redesigned'],
    }),
    off: () => ({
      Text: TextDeprecated,
      infoIconCls: '',
    }),
  });

  return (
    <DynamicReducerProvider reducers={reducers}>
      <VStack justify="center" align="center" fullW className={className}>
        {!postError ? (
          <>
            {isPostLoading && <PostDetailsSkeleton />}

            {!isPostLoading && (
              <VStack fullW fullH>
                <HStack fullW align="center" justify="center">
                  <AppImage
                    src={postDetails?.img || ''}
                    alt={postDetails?.title}
                    className={cls.banner}
                    ErrorFallback={null}
                  />
                </HStack>

                <VStack gap="16" fullW className={classNames(cls['post-info'])}>
                  <Text title={postDetails?.title} text={postDetails?.subtitle} />

                  <HStack fullW align="center" gap="24">
                    <HStack justify="start" align="center" gap="8" className={infoIconCls}>
                      <EyeIcon width={24} height={24} fill="currentColor" />
                      <Text text={String(postDetails?.views)} />
                    </HStack>

                    <HStack justify="start" align="center" gap="8" className={infoIconCls}>
                      <CalendarIcon width={24} height={24} fill="currentColor" />
                      <Text text={createdAt} />
                    </HStack>

                    <Text text={postDetails?.tags.map((tag) => `#${tag}`).join(' ')} />
                  </HStack>
                </VStack>

                <VStack fullW gap="24">
                  {postDetails?.blocks.map((block) => (
                    <PostBlocksGenerator key={block.id} block={block} />
                  ))}
                </VStack>
              </VStack>
            )}
          </>
        ) : (
          <div className={classNames(cls['error-block'])}>
            <ToggleFeatures
              feature="redesign"
              on={
                <TextRedesigned
                  variant="error"
                  title={t('post-not-exist', {
                    defaultValue:
                      'The post does not exist or could not be loaded! Try again later!',
                  })}
                />
              }
              off={
                <TextDeprecated
                  theme={TextTheme.ERROR}
                  title={t('post-not-exist', {
                    defaultValue:
                      'The post does not exist or could not be loaded! Try again later!',
                  })}
                />
              }
            />
          </div>
        )}
      </VStack>
    </DynamicReducerProvider>
  );
});

export default PostDetails;
