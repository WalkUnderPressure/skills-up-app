import { StoreStateSchema } from 'app/providers/StoreProvider';

const getSignInState = (state: StoreStateSchema) => state['sign-in_username'];

export default getSignInState;
