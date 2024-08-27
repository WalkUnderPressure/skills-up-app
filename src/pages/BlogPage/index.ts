import { getBlogPostsIsLoading, getBlogPostViewType } from './model/selectors/blogPageSelectors';
import { blogPageActions, blogPageReducer } from './model/slice/blogPageSlice';
import fetchBlogPosts from './model/services/fetchBlogPosts/fetchBlogPosts';
import BlogPageSchema from './model/types/BlogPageSchema';
import BlogPageAsync from './ui/BlogPage.async';

export {
  BlogPageAsync as BlogPage,
  BlogPageSchema,
  blogPageReducer,
  blogPageActions,
  getBlogPostsIsLoading,
  getBlogPostViewType,
  fetchBlogPosts,
};
