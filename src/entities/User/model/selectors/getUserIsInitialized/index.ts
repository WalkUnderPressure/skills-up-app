import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getUserIsInitialized = (state: StoreStateSchema) => state.user?.isInitialized || false;

export default getUserIsInitialized;
