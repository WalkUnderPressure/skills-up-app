import { buildAppSelector } from '~/shared/lib/store';

export const [useAddCommentaryText, getAddCommentaryText] = buildAppSelector(
  (state) => state?.addCommentaryForm?.text || '',
);

export const [useAddCommentaryIsLoading, getAddCommentaryIsLoading] = buildAppSelector(
  (state) => state?.addCommentaryForm?.isLoading || false,
);
