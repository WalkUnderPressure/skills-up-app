import { buildAppSelector } from '~/shared/lib/store';

export const [usePostCommentariesIsLoading, getPostCommentariesIsLoading] = buildAppSelector(
  (state) => {
    return state?.postPage?.postCommentaries?.isLoading || false;
  },
);
