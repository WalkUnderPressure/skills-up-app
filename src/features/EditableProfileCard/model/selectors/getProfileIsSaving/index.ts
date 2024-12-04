import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getProfileIsSaving = (state: StoreStateSchema) => {
  return state['profile']?.isSaving || false;
};

export default getProfileIsSaving;
