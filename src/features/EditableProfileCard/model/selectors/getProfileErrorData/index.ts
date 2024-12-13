import { createSelector } from '@reduxjs/toolkit';

import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { buildAppSelector } from '~/shared/lib/store';

const getProfileErrorCode = (state: StoreStateSchema) => {
  return state['profile']?.errorCode || null;
};

const getProfileIsFailed = (state: StoreStateSchema) => {
  return state['profile']?.isFailed || false;
};

export const [useProfileErrorData, getProfileErrorData] = buildAppSelector(
  createSelector([getProfileIsFailed, getProfileErrorCode], (isFailed, errorCode) => {
    return { isFailed, errorCode };
  }),
);
