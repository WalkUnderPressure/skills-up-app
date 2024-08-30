import generateAsyncComponent from 'shared/lib/helpers/generateAsyncComponent';
import { PostEditPageProps } from './PostEditPage';

const PostEditPageAsync = generateAsyncComponent<PostEditPageProps>(import('./PostEditPage'));

export default PostEditPageAsync;
