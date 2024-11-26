import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { AddCommentaryForm } from 'features/AddCommentaryForm';
import { CommentaryList } from 'entities/Commentary';
import classNames from 'shared/lib/classNames';
import { PostDetails, PostsList, PostViewMap } from 'entities/Post';
import { getPostRecommendationsIsLoading } from '../../model/selectors/postRecommendationsSelectors';
import { getPostCommentariesIsLoading } from '../../model/selectors/commentariesSelectors';
import fetchCommentariesByPostId from '../../model/services/fetchCommentariesByPostId';
import fetchPostRecommendations from '../../model/services/fetchPostRecommendations';
import { getPostRecommendations } from '../../model/slice/postRecommendationsSlice';
import { addCommentaryToPost } from '../../model/services/addCommentaryToPost';
import { getPostCommentaries } from '../../model/slice/postCommentariesSlice';
import postPageReducer from '../../model/slice/postPageReducer';
import PostPageHeader from '../PostPageHeader';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import * as cls from './PostPage.module.scss';

export type PostPageProps = {
  className?: string;
};

const reducers: ReducersMap = {
  postPage: postPageReducer,
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { id: postId } = useParams();

  const isCommentariesLoading = useAppSelector(getPostCommentariesIsLoading);
  const commentaries = useAppSelector(getPostCommentaries.selectAll);
  const isRecommendationsLoading = useAppSelector(getPostRecommendationsIsLoading);
  const recommendations = useAppSelector(getPostRecommendations.selectAll);

  useEffect(() => {
    dispatch(fetchCommentariesByPostId(postId));
    dispatch(fetchPostRecommendations());
  }, [dispatch, postId]);

  const onSendCommentary = useCallback(
    (text: string) => {
      dispatch(addCommentaryToPost(text));
    },
    [dispatch],
  );

  return (
    <DynamicReducerProvider reducers={reducers}>
      <Page>
        <PostPageHeader />

        <VStack gap="48" fullW className={classNames(cls['post-page'], {}, [className])}>
          <PostDetails postId={postId} />

          <VStack fullW>
            <Text title={t('recommendations.title', { defaultValue: 'Recommendations' })} />

            <PostsList
              posts={recommendations}
              isLoading={isRecommendationsLoading}
              viewType={PostViewMap.SHORT}
              className={cls.recommendations}
              target="_blank"
            />
          </VStack>

          <AddCommentaryForm onSendCommentary={onSendCommentary} />

          <CommentaryList isLoading={isCommentariesLoading} commentaries={commentaries} />
        </VStack>
      </Page>
    </DynamicReducerProvider>
  );
};

export default PostPage;
