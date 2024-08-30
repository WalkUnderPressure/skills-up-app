import generateAsyncComponent from 'shared/lib/helpers/generateAsyncComponent';
import { PostPageProps } from './PostPage';

const PostPageAsync = generateAsyncComponent<PostPageProps>(import('./PostPage'));

export default PostPageAsync;
