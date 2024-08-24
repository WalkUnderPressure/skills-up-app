import { StoreStateSchema } from 'app/providers/StoreProvider';

const getUserId = (state: StoreStateSchema) => state.user?.authData?.id || '';

export default getUserId;
