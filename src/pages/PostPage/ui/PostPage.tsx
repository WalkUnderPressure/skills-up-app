import { useParams } from 'react-router-dom';

import { PostDetails } from 'entities/Post';
import classNames from 'shared/lib/classNames';
import * as cls from './PostPage.module.scss';

export type PostPageProps = {
  className?: string;
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const { id: postId } = useParams();

  return (
    <div className={classNames(cls['post-page'], {}, [className])}>
      <PostDetails postId={postId} />
    </div>
  );
};

export default PostPage;
