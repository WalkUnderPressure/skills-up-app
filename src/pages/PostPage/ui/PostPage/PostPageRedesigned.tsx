import { PostRating } from '~/features/PostRating';
import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';
import { useToggleFeatures } from '~/entities/User';
import { PostPageCommonProps } from './types';
import cls from './PostPage.module.scss';
import PostPageHeader from '~/pages/PostPage/ui/PostPageHeader';
import { VStack } from '~/shared/ui/redesigned/Stack';
import { PostDetails } from '~/entities/Post';
import { PostCommentaries } from '~/features/PostCommentaries';
import { PostRecommendationsList } from '~/features/PostRecommendationsList';

const PostPageRedesigned = (props: PostPageCommonProps) => {
  const { postId, className } = props;

  const PostRatingEl = useToggleFeatures({
    feature: 'post_rating',
    on: () => <PostRating postId={postId} />,
    off: () => null,
  });

  return (
    <Page className={classNames(cls['post-page-redesigned'], {}, [className])}>
      <PostPageHeader />

      <VStack gap="48" fullW>
        <PostDetails postId={postId} />

        {PostRatingEl}

        <PostRecommendationsList />

        <PostCommentaries postId={postId} />
      </VStack>
    </Page>
  );
};

export default PostPageRedesigned;
