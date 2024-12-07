import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { PostRecommendationsList } from '~/features/PostRecommendationsList';
import classNames from '~/shared/lib/classNames';
import { PostDetails } from '~/entities/Post';
import { VStack } from '~/shared/ui/Stack';
import { Page } from '~/widgets/Page';
import postPageReducer from '../../model/slices/postPageReducer';
import PostCommentaries from '../PostCommentaries';
import PostPageHeader from '../PostPageHeader';
import { RatingCard } from '~/entities/Rating';
import cls from './PostPage.module.scss';

export type PostPageProps = PropsWithClassName;

const reducers: ReducersMap = {
  postPage: postPageReducer,
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.blog');
  const { id: postId } = useParams();

  const rating = 0;

  return (
    <DynamicReducerProvider reducers={reducers}>
      <Page>
        <PostPageHeader />

        <VStack gap="48" fullW className={classNames(cls['post-page'], {}, [className])}>
          <RatingCard
            title={
              rating
                ? t('post.rated', { defaultValue: 'Thanks You have already rated this post!' })
                : t('post.unrated', { defaultValue: 'Please rate this post!' })
            }
            rating={rating}
            feedbackTitle={t('post.feedback', {
              defaultValue: 'Write your feedback about the post here',
            })}
            onAccept={(rating, feedback) => console.log('accept rating:', { rating, feedback })}
            onCancel={(rating) => console.log('cancel rating:', { rating })}
          />

          <PostDetails postId={postId} />

          <PostRecommendationsList />

          <PostCommentaries postId={postId} />
        </VStack>
      </Page>
    </DynamicReducerProvider>
  );
};

export default PostPage;
