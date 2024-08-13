import { StoreStateSchema } from 'app/providers/StoreProvider';

const getUserAuthData = (state: StoreStateSchema) => state.user.authData;

export default getUserAuthData;
