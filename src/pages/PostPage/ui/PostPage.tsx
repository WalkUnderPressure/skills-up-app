import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { CommentaryList } from 'entities/Commentary';
import classNames from 'shared/lib/classNames';
import { PostDetails } from 'entities/Post';
import { getPostCommentaries, postCommentariesReducer } from '../model/slice/postCommentariesSlice';
import fetchCommentariesByPostId from '../model/services/fetchCommentariesByPostId';
import { getPostCommentariesIsLoading } from '../model/selectors/commentaries';
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

  const commentaries = useAppSelector(getPostCommentaries.selectAll);
  const isCommentariesLoading = useAppSelector(getPostCommentariesIsLoading);

  useEffect(() => {
    dispatch(fetchCommentariesByPostId(postId));
  }, [dispatch, postId]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames(cls['post-page'], {}, [className])}>
        <PostDetails postId={postId} />

        <CommentaryList isLoading={isCommentariesLoading} commentaries={commentaries} />
      </div>
    </DynamicReducerProvider>
  );
};

export default PostPage;
