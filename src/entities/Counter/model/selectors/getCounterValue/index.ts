import { createSelector } from '@reduxjs/toolkit';

import getCounter from '../getCounter';

const getCounterValue = createSelector(getCounter, (counter) => counter?.value || 0);

export default getCounterValue;
