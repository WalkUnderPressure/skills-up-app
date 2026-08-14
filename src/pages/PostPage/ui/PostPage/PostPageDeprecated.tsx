import { PostRecommendationsList } from '~/features/PostRecommendationsList';
import { PostRating } from '~/features/PostRating';
import classNames from '~/shared/lib/classNames';
import { PostDetails } from '~/entities/Post';
import { VStack } from '~/shared/ui/redesigned/Stack';
import { Page } from '~/widgets/Page';
import { PostCommentaries } from '~/features/PostCommentaries';
import PostPageHeader from '../PostPageHeader';
import cls from './PostPage.module.scss';
import { useToggleFeatures } from '~/entities/FeatureFlags';
import { PostPageCommonProps } from './types';

const PostPageDeprecated = (props: PostPageCommonProps) => {
  const { postId, className } = props;

  const PostRatingEl = useToggleFeatures({
    feature: 'post_rating',
    on: () => <PostRating postId={postId} />,
    off: () => null,
  });

  return (
    <Page>
      <PostPageHeader />

      <VStack gap="48" fullW className={classNames(cls['post-page'], {}, [className])}>
        <PostDetails postId={postId} />

        {PostRatingEl}

        <PostRecommendationsList />

        <PostCommentaries postId={postId} />
      </VStack>
    </Page>
  );
};

export default PostPageDeprecated;
