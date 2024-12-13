import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { postDetailsReducer } from '../../../model/slices/postDetailsSlice';
import { useFetchPostById } from '../../../model/services/fetchPostById';
import {
  usePostDetails,
  usePostIsLoading,
  usePostError,
} from '../../../model/selectors/postDetailsSelectors';
import PostBlocksGenerator from '../PostBlocksGenerator';
import { Text, TextTheme } from '~/shared/ui/Text';
import PostDetailsSkeleton from '../PostDetailsSkeleton';
import useDateTransformer from '~/shared/lib/hooks/useDateTransformer';
import { HStack, VStack } from '~/shared/ui/Stack';
import { Avatar, AvatarSize } from '~/shared/ui/Avatar';
import classNames from '~/shared/lib/classNames';
import cls from './PostDetails.module.scss';

import CalendarIcon from '~/shared/assets/icons/calendar.svg';
import EyeIcon from '~/shared/assets/icons/eye.svg';

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
    fetchPostById({ postId });
  }, [fetchPostById, postId]);

  const createdAt = useDateTransformer(Number(postDetails?.createdAt));

  return (
    <DynamicReducerProvider reducers={reducers}>
      <VStack justify="center" align="center" fullW className={className}>
        {!postError ? (
          <>
            {isPostLoading && <PostDetailsSkeleton />}

            {!isPostLoading && (
              <VStack fullW fullH>
                <Avatar
                  size={AvatarSize.L}
                  src={postDetails?.img || ''}
                  alt="PostAvatar"
                  className={classNames(cls.avatar)}
                />

                <VStack gap="16" fullW className={classNames(cls['post-info'])}>
                  <Text title={postDetails?.title} text={postDetails?.subtitle} />

                  <HStack fullW align="center" gap="24">
                    <HStack justify="start" align="center" gap="8">
                      <EyeIcon fill="currentColor" />
                      <Text text={String(postDetails?.views)} />
                    </HStack>

                    <HStack justify="start" align="center" gap="8">
                      <CalendarIcon fill="currentColor" />
                      <Text text={createdAt} />
                    </HStack>
                    <div>{postDetails?.tags.map((tag) => <span key={tag}>{`#${tag}`}</span>)}</div>
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
            <Text
              theme={TextTheme.ERROR}
              title={t('post-not-exist', {
                defaultValue: 'The post does not exist or could not be loaded! Try again later!',
              })}
            />
          </div>
        )}
      </VStack>
    </DynamicReducerProvider>
  );
});

export default PostDetails;
