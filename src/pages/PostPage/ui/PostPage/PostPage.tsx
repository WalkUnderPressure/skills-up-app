import { useParams } from 'react-router-dom';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { PostPageCommonProps } from '~/pages/PostPage/ui/PostPage/types';
import postPageReducer from '../../model/slices/postPageReducer';
import { ToggleFeatures } from '~/entities/FeatureFlags';
import PostPageRedesigned from './PostPageRedesigned';
import PostPageDeprecated from './PostPageDeprecated';

export type PostPageProps = PropsWithClassName;

const reducers: ReducersMap = {
  postPage: postPageReducer,
};

const PostPage = (props: PostPageProps) => {
  const { className } = props;

  const { id: postId = '' } = useParams();

  const postPageProps: PostPageCommonProps = {
    postId,
    className,
  };

  return (
    <DynamicReducerProvider reducers={reducers}>
      <ToggleFeatures
        feature="redesign"
        on={<PostPageRedesigned {...postPageProps} />}
        off={<PostPageDeprecated {...postPageProps} />}
      />
    </DynamicReducerProvider>
  );
};

export default PostPage;
