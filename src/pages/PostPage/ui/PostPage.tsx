import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { AddCommentaryForm } from 'features/AddCommentaryForm';
import { CommentaryList } from 'entities/Commentary';
import classNames from 'shared/lib/classNames';
import { PostDetails } from 'entities/Post';
import { getPostCommentaries, postCommentariesReducer } from '../model/slice/postCommentariesSlice';
import fetchCommentariesByPostId from '../model/services/fetchCommentariesByPostId';
import { getPostCommentariesIsLoading } from '../model/selectors/commentaries';
import { addCommentaryToPost } from '../model/services/addCommentaryToPost';
import * as cls from './PostPage.module.scss';

export type PostPageProps = {
  className?: string;
};

const reducers: ReducersMap = {
  postCommentaries: postCommentariesReducer,
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const { id: postId } = useParams();

  const isCommentariesLoading = useAppSelector(getPostCommentariesIsLoading);
  const commentaries = useAppSelector(getPostCommentaries.selectAll);

  useEffect(() => {
    dispatch(fetchCommentariesByPostId(postId));
  }, [dispatch, postId]);

  const onSendCommentary = useCallback(
    (text: string) => {
      dispatch(addCommentaryToPost(text));
    },
    [dispatch],
  );

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames(cls['post-page'], {}, [className])}>
        <PostDetails postId={postId} />

        <AddCommentaryForm onSendCommentary={onSendCommentary} />

        <CommentaryList isLoading={isCommentariesLoading} commentaries={commentaries} />
      </div>
    </DynamicReducerProvider>
  );
};

export default PostPage;
