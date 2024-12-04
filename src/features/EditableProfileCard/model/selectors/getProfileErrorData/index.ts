import { createSelector } from '@reduxjs/toolkit';

import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getProfileErrorCode = (state: StoreStateSchema) => {
  return state['profile']?.errorCode || null;
};

const getProfileIsFailed = (state: StoreStateSchema) => {
  return state['profile']?.isFailed || false;
};

const getProfileErrorData = createSelector(
  [getProfileIsFailed, getProfileErrorCode],
  (isFailed, errorCode) => {
    return { isFailed, errorCode };
  },
);

export default getProfileErrorData;
