import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getProfileIsReadonly = (state: StoreStateSchema) => {
  return state['profile']?.isReadonly || false;
};

export default getProfileIsReadonly;
