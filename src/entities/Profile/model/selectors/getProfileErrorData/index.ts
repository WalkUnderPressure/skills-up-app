import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileErrorData = (state: StoreStateSchema) => {
  const errorCode = state['profile']?.errorCode || null;
  const isFailed = state['profile']?.isFailed || false;

  return { isFailed, errorCode };
};

export default getProfileErrorData;
