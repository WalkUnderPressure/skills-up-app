import { StoreStateSchema } from 'app/providers/StoreProvider';

const getAddCommentaryText = (state: StoreStateSchema) => state?.addCommentaryForm?.text || '';
const getAddCommentaryIsLoading = (state: StoreStateSchema) =>
  state?.addCommentaryForm?.isLoading || false;

export { getAddCommentaryText, getAddCommentaryIsLoading };
