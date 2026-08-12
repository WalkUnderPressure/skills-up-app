import { memo } from 'react';

import { Tabs } from '~/shared/ui/deprecated/Tabs';
import classNames from '~/shared/lib/classNames';
import { PostTagsKey } from '~/entities/Post';
import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import usePostTags from '~/features/PostTagsTabs/lib/usePostTags';

type PostTagsTabsProps = {
  value: PostTagsKey;
  onChangeTab: (type: PostTagsKey) => void;
} & PropsWithClassName;

const PostTagsTabs = memo((props: PostTagsTabsProps) => {
  const { className, value, onChangeTab } = props;

  const postTags = usePostTags();

  return (
    <Tabs<PostTagsKey>
      tabs={postTags}
      value={value}
      onTabClick={onChangeTab}
      className={classNames('', {}, [className])}
      data-testid={BlogPageDataTestIds.SearchAndFilters.TagTabs}
    />
  );
});

export default PostTagsTabs;
