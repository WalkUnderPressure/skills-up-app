import { BlogPageDataTestIds } from '~/pages/BlogPage/constants';
import BlogPageFilters from '../BlogPageFilters/BlogPageFilters';
import BlogListViewSwitcher from '../BlogListViewSwitcher';
import { TubeLayout } from '~/shared/layouts/TubeLayout';
import BlogInfiniteList from '../BlogInfiniteList';
import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';
import cls from './BlogPage.module.scss';

type BlogPageContentRedesignedProps = PropsWithClassName;

const BlogPageContentRedesigned = (props: BlogPageContentRedesignedProps) => {
  const { className } = props;

  return (
    <TubeLayout
      leftbar={<BlogListViewSwitcher />}
      content={
        <Page
          className={classNames(cls['redesigned-blog-page'], {}, [className])}
          data-testid={BlogPageDataTestIds.Page}
        >
          <BlogInfiniteList />
        </Page>
      }
      rightbar={<BlogPageFilters />}
    />
  );
};

export default BlogPageContentRedesigned;
