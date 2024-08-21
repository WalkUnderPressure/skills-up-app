import { useLocation } from 'react-router-dom';

import classNames from 'shared/lib/classNames';
import * as cls from './PostPage.module.scss';

export type PostPageProps = {
  className?: string;
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const location = useLocation();

  return (
    <div className={classNames(cls['post-page'], {}, [className])}>
      <h3>{'__' + 'POST PAGE'}</h3>

      <p>{location.pathname}</p>
    </div>
  );
};

export default PostPage;
