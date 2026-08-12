import { memo } from 'react';

import BlogPageFiltersDeprecated from './BlogPageFiltersDeprecated';
import BlogPageFiltersRedesigned from './BlogPageFiltersRedesigned';
import { ToggleFeatures } from '~/entities/FeatureFlags';

type BlogPageFiltersProps = PropsWithClassName;

const BlogPageFilters = memo((props: BlogPageFiltersProps) => {
  const { className } = props;

  return (
    <ToggleFeatures
      feature="redesign"
      on={<BlogPageFiltersRedesigned className={className} />}
      off={<BlogPageFiltersDeprecated className={className} />}
    />
  );
});

export default BlogPageFilters;
