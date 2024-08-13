import { StoreStateSchema } from 'app/providers/StoreProvider';

const getCounter = (state: StoreStateSchema) => state.counter;

export default getCounter;
