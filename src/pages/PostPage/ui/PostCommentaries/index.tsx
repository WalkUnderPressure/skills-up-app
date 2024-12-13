import { useCallback, useEffect } from 'react';

import { AddCommentaryForm } from '~/features/AddCommentaryForm';
import { CommentaryList } from '~/entities/Commentary';
import { usePostCommentariesIsLoading } from '../../model/selectors/commentariesSelectors';
import { usePostCommentariesSelectAll } from '../../model/slices/postCommentariesSlice';
import { useFetchCommentariesByPostId } from '../../model/services/fetchCommentariesByPostId';
import { useAddCommentaryToPost } from '../../model/services/addCommentaryToPost';

type PostCommentariesProps = {
  postId?: string;
};

const PostCommentaries = (props: PostCommentariesProps) => {
  const { postId } = props;

  const isCommentariesLoading = usePostCommentariesIsLoading();
  const commentaries = usePostCommentariesSelectAll();

  const fetchCommentariesByPostId = useFetchCommentariesByPostId();
  const addCommentaryToPost = useAddCommentaryToPost();

  const onSendCommentary = useCallback(
    (text: string) => {
      addCommentaryToPost(text);
    },
    [addCommentaryToPost],
  );

  useEffect(() => {
    fetchCommentariesByPostId({ postId });
  }, [fetchCommentariesByPostId, postId]);

  return (
    <>
      <AddCommentaryForm onSendCommentary={onSendCommentary} />

      <CommentaryList isLoading={isCommentariesLoading} commentaries={commentaries} />
    </>
  );
};

export default PostCommentaries;
