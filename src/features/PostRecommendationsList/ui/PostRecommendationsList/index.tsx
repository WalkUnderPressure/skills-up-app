import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { usePostRecommendations } from '../../api/postRecommendationsApi';
import { PostsList, PostViewMap } from 'entities/Post';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import classNames from 'shared/lib/classNames';

import * as cls from './PostRecommendationsList.module.scss';

type PostRecommendationsListProps = {
  className?: string;
};

const PostRecommendationsList = memo((props: PostRecommendationsListProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const { isLoading: isRecommendationsLoading, data: recommendations } = usePostRecommendations({});

  return (
    <div className={classNames(cls['post-recommendations-list'], {}, [className])}>
      <VStack fullW>
        <Text title={t('recommendations.title', { defaultValue: 'Recommendations' })} />

        <PostsList
          posts={recommendations}
          isLoading={isRecommendationsLoading}
          viewType={PostViewMap.SHORT}
          className={cls.recommendations}
          target="_blank"
        />
      </VStack>
    </div>
  );
});

export default PostRecommendationsList;
