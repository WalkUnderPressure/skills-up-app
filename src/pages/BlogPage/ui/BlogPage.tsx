import classNames from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import * as cls from './BlogPage.module.scss';

export type BlogPageProps = {
  className?: string;
};

const BlogPage = (props: BlogPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls['blog-page'], {}, [className])}>
      <h3>{'__' + 'BLOG PAGE'}</h3>

      <div>
        <AppLink to="/post/1">{'__' + 'First post'}</AppLink>
      </div>
    </div>
  );
};

export default BlogPage;
