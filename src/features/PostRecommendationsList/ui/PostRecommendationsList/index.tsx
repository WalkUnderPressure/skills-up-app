import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { usePostRecommendations } from '../../api/postRecommendationsApi';
import { PostsList, PostViewMap } from '~/entities/Post';
import { VStack } from '~/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import classNames from '~/shared/lib/classNames';

import cls from './PostRecommendationsList.module.scss';
import { useToggleFeatures } from '~/entities/FeatureFlags';

type PostRecommendationsListProps = PropsWithClassName;

const PostRecommendationsList = memo((props: PostRecommendationsListProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const { isLoading: isRecommendationsLoading, data: recommendations } = usePostRecommendations({});

  const { Text, listCls, recommendationsCls } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Text: TextRedesigned,
      listCls: cls['post-recommendations-list-redesigned'],
      recommendationsCls: cls['recommendations-redesigned'],
    }),
    off: () => ({
      Text: TextDeprecated,
      listCls: cls['post-recommendations-list'],
      recommendationsCls: cls['recommendations'],
    }),
  });

  return (
    <VStack fullW className={classNames(listCls, {}, [className])}>
      <Text title={t('recommendations.title', { defaultValue: 'Recommendations' })} />

      <PostsList
        posts={recommendations}
        isLoading={isRecommendationsLoading}
        viewType={PostViewMap.SHORT}
        className={recommendationsCls}
        target="_blank"
      />
    </VStack>
  );
});

export default PostRecommendationsList;
