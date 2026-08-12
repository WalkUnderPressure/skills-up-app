import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import BlogPageFilters from '../BlogPageFilters/BlogPageFilters';
import BlogInfiniteList from '../BlogInfiniteList';
import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';
import cls from './BlogPage.module.scss';

type BlogPageContentDeprecatedProps = PropsWithClassName;

const BlogPageContentDeprecated = (props: BlogPageContentDeprecatedProps) => {
  const { className } = props;

  return (
    <Page
      className={classNames(cls['blog-page'], {}, [className])}
      data-testid={BlogPageDataTestIds.Page}
    >
      <BlogPageFilters />

      <BlogInfiniteList />
    </Page>
  );
};

export default BlogPageContentDeprecated;
