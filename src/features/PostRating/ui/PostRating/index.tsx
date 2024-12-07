import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Skeleton } from '~/shared/ui/Skeleton';
import { RatingCard } from '~/entities/Rating';
import { usePostRating, useSetPostRating } from '../../api/postRatingApi';

type PostRatingProps = {
  postId?: string;
} & PropsWithClassName;

const PostRating = memo((props: PostRatingProps) => {
  const { className, postId } = props;

  const { t } = useTranslation('pages.blog');

  const { data: fetchedPostRating, isLoading } = usePostRating(
    { postId },
    { skip: Boolean(!postId) },
  );
  const [setPostRating, { data: updatedPostRating }] = useSetPostRating();

  const postRating = { ...(fetchedPostRating ?? {}), ...(updatedPostRating ?? {}) };
  const isPostRatingLoading = Boolean(isLoading);

  const sendPostRating = useCallback(
    (rating: number, feedback?: string) => {
      if (!rating && !feedback) {
        return;
      }

      try {
        setPostRating({
          postId,
          rating,
          feedback,
        });
      } catch (error) {
        console.error("Can't create post rating!");
      }
    },
    [postId, setPostRating],
  );

  if (isPostRatingLoading) {
    return <Skeleton width="100%" height="104px" />;
  }

  return (
    <RatingCard
      title={
        postRating.rating
          ? t('post.rated', { defaultValue: 'Thanks You have already rated this post!' })
          : t('post.unrated', { defaultValue: 'Please rate this post!' })
      }
      rating={postRating.rating}
      feedbackTitle={t('post.feedback', {
        defaultValue: 'Write your feedback about the post here',
      })}
      onAccept={sendPostRating}
      onCancel={sendPostRating}
      className={className}
    />
  );
});

export default PostRating;
