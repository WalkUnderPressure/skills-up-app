import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { usePostRating, useSetPostRating } from '../../api/postRatingApi';
import { RatingCard } from '~/entities/Rating';
import { PostRatingDataTestIds } from '~/features/PostRating/constants';
import { useToggleFeatures } from '~/entities/FeatureFlags';
import { Skeleton as SkeletonDeprecated } from '~/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '~/shared/ui/redesigned/Skeleton';

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

  const { Skeleton } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Skeleton: SkeletonRedesigned,
    }),
    off: () => ({
      Skeleton: SkeletonDeprecated,
    }),
  });

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

  if (!postId) {
    return null;
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
      dataTestIds={PostRatingDataTestIds.RatingCard}
    />
  );
});

export default PostRating;
