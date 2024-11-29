import { useParams } from 'react-router-dom';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { PostRecommendationsList } from 'features/PostRecommendationsList';
import classNames from 'shared/lib/classNames';
import { PostDetails } from 'entities/Post';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import postPageReducer from '../../model/slices/postPageReducer';
import PostCommentaries from '../PostCommentaries';
import PostPageHeader from '../PostPageHeader';
import * as cls from './PostPage.module.scss';

export type PostPageProps = {
  className?: string;
};

const reducers: ReducersMap = {
  postPage: postPageReducer,
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const { id: postId } = useParams();

  return (
    <DynamicReducerProvider reducers={reducers}>
      <Page>
        <PostPageHeader />

        <VStack gap="48" fullW className={classNames(cls['post-page'], {}, [className])}>
          <PostDetails postId={postId} />

          <PostRecommendationsList />

          <PostCommentaries postId={postId} />
        </VStack>
      </Page>
    </DynamicReducerProvider>
  );
};

export default PostPage;
