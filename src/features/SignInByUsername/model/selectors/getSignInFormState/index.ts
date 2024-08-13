import { StoreStateSchema } from 'app/providers/StoreProvider';

const getSignInFormState = (state: StoreStateSchema) => state['sign-in_username'] || {};

export default getSignInFormState;
