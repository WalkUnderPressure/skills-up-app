import { memo, useEffect } from 'react';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import classNames from 'shared/lib/classNames';
import { postDetailsReducer } from '../../model/slice/postDetailsSlice';
import { fetchPostById } from '../../model/services/fetchPostById';
import {
  getPostDetails,
  getPostIsLoading,
  getPostError,
} from '../../model/selectors/postDetailsSelectors';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text';
import PostDetailsSkeleton from '../PostDetailsSkeleton';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import * as cls from './PostDetails.module.scss';

import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import PostBlocksGenerator from 'entities/Post/ui/PostBlocksGenerator';

const reducers: ReducersMap = {
  postDetails: postDetailsReducer,
};

type PostDetailsProps = {
  className?: string;
  postId?: string;
};

const PostDetails = memo((props: PostDetailsProps) => {
  const { className, postId } = props;

  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('pages.blog');

  const isPostLoading = useAppSelector(getPostIsLoading);
  const postDetails = useAppSelector(getPostDetails);
  const postError = useAppSelector(getPostError);

  useEffect(() => {
    dispatch(fetchPostById(postId));
  }, [dispatch, postId]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames(cls['post-details'], {}, [className])}>
        {!postError ? (
          <>
            {isPostLoading && <PostDetailsSkeleton />}

            {!isPostLoading && (
              <div className={classNames(cls['post-content'])}>
                <Avatar
                  size={AvatarSize.L}
                  src={postDetails?.img || ''}
                  alt="PostAvatar"
                  className={classNames(cls.avatar)}
                />

                <div className={classNames(cls['post-info'])}>
                  <Text title={postDetails?.title} text={postDetails?.subtitle} />

                  <div className={classNames(cls['info-block-wrapper'])}>
                    <div className={classNames(cls['info-block'])}>
                      <EyeIcon fill="currentColor" />
                      <Text text={String(postDetails?.views)} />
                    </div>

                    <div className={classNames(cls['info-block'])}>
                      <CalendarIcon fill="currentColor" />
                      <Text
                        text={new Date(postDetails?.createdAt || '').toLocaleDateString(
                          i18n.language,
                        )}
                      />
                    </div>

                    <div>{postDetails?.tags.map((tag) => <span key={tag}>{`#${tag}`}</span>)}</div>
                  </div>
                </div>

                <div className={classNames(cls.blocks)}>
                  {postDetails?.blocks.map((block) => (
                    <PostBlocksGenerator key={block.id} block={block} />
                  ))}
                </div>
              </div>
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
      </div>
    </DynamicReducerProvider>
  );
});

export default PostDetails;
