import generateAsyncComponent from '~/shared/lib/helpers/generateAsyncComponent';
import { BlogPageProps } from './BlogPage';

const BlogPageAsync = generateAsyncComponent<BlogPageProps>(import('./BlogPage'));

export default BlogPageAsync;
