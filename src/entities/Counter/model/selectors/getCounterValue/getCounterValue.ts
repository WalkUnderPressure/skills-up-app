import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter';

const getCounterValue = createSelector(getCounter, (counter) => counter.value);

export default getCounterValue;
