import { useSearchParams } from 'react-router-dom';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import useInitialEffect from '~/shared/lib/hooks/useInitialEffect';
import { blogPageReducer } from '../../model/slices/blogPageSlice';
import { useInitBlogPageState } from '../../model/services/initBlogPageState/initBlogPageState';
import BlogPageContentRedesigned from './BlogPageContentRedesigned';
import BlogPageContentDeprecated from './BlogPageContentDeprecated';
import { ToggleFeatures } from '~/entities/User';

const reducers: ReducersMap = {
  blogPage: blogPageReducer,
};

export type BlogPageProps = PropsWithClassName;

const BlogPage = (props: BlogPageProps) => {
  const { className } = props;

  const [searchParams] = useSearchParams();
  const initBlogPageState = useInitBlogPageState();

  useInitialEffect(() => {
    initBlogPageState(searchParams);
    // IMPORTANT Don't change deps array
  }, []);

  return (
    <DynamicReducerProvider reducers={reducers} removeAfterUnmount={false}>
      <ToggleFeatures
        feature="redesign"
        on={<BlogPageContentRedesigned className={className} />}
        off={<BlogPageContentDeprecated className={className} />}
      />
    </DynamicReducerProvider>
  );
};

export default BlogPage;
