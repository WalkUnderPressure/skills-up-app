import { useCallback } from 'react';

import { useBlogPostViewType } from '../../model/selectors/blogPageSelectors';
import { BlogViewTypeSwitcher } from '~/features/BlogViewTypeSwitcher';
import { useBlogPageActions } from '../../model/slices/blogPageSlice';
import { PostViewKey } from '~/entities/Post';

const BlogListViewSwitcher = () => {
  const postViewType = useBlogPostViewType();
  const { setViewType } = useBlogPageActions();

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => {
      setViewType(nextViewType);
    },
    [setViewType],
  );

  return <BlogViewTypeSwitcher viewType={postViewType} onChangeView={changeViewType} />;
};

export default BlogListViewSwitcher;
