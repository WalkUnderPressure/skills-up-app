import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { AddCommentaryForm } from 'features/AddCommentaryForm';
import { CommentaryList } from 'entities/Commentary';
import { getPostCommentariesIsLoading } from '../../model/selectors/commentariesSelectors';
import fetchCommentariesByPostId from '../../model/services/fetchCommentariesByPostId';
import { addCommentaryToPost } from '../../model/services/addCommentaryToPost';
import { getPostCommentaries } from '../../model/slices/postCommentariesSlice';

type PostCommentariesProps = {
  postId?: string;
};

const PostCommentaries = (props: PostCommentariesProps) => {
  const { postId } = props;

  const dispatch = useAppDispatch();

  const isCommentariesLoading = useAppSelector(getPostCommentariesIsLoading);
  const commentaries = useAppSelector(getPostCommentaries.selectAll);

  const onSendCommentary = useCallback(
    (text: string) => {
      dispatch(addCommentaryToPost(text));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchCommentariesByPostId(postId));
  }, [dispatch, postId]);

  return (
    <>
      <AddCommentaryForm onSendCommentary={onSendCommentary} />

      <CommentaryList isLoading={isCommentariesLoading} commentaries={commentaries} />
    </>
  );
};

export default PostCommentaries;
