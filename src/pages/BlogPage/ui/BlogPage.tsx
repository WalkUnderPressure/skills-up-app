import { MockPostsListData } from 'entities/Post/mock/MockPostsListData';
import { PostsList, PostsViewType } from 'entities/Post';
import classNames from 'shared/lib/classNames';
import * as cls from './BlogPage.module.scss';

export type BlogPageProps = {
  className?: string;
};

const BlogPage = (props: BlogPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls['blog-page'], {}, [className])}>
      <PostsList
        posts={MockPostsListData}
        isLoading={false}
        // viewType={PostsViewType.SHORT}
        viewType={PostsViewType.FULL}
      />
    </div>
  );
};

export default BlogPage;
