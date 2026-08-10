import { useParams } from 'react-router-dom';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { PostRecommendationsList } from '~/features/PostRecommendationsList';
import { PostRating } from '~/features/PostRating';
import classNames from '~/shared/lib/classNames';
import { PostDetails } from '~/entities/Post';
import { VStack } from '~/shared/ui/deprecated/Stack';
import { Page } from '~/widgets/Page';
import postPageReducer from '../../model/slices/postPageReducer';
import { PostCommentaries } from '~/features/PostCommentaries';
import PostPageHeader from '../PostPageHeader';
import cls from './PostPage.module.scss';
import { useToggleFeatures } from '~/entities/FeatureFlags';

export type PostPageProps = PropsWithClassName;

const reducers: ReducersMap = {
  postPage: postPageReducer,
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const { id: postId } = useParams();

  const PostRatingEl = useToggleFeatures({
    feature: 'post_rating',
    on: () => <PostRating postId={postId} />,
    off: () => null,
  });

  return (
    <DynamicReducerProvider reducers={reducers}>
      <Page>
        <PostPageHeader />

        <VStack gap="48" fullW className={classNames(cls['post-page'], {}, [className])}>
          <PostDetails postId={postId} />

          {PostRatingEl}

          <PostRecommendationsList />

          <PostCommentaries postId={postId} />
        </VStack>
      </Page>
    </DynamicReducerProvider>
  );
};

export default PostPage;
