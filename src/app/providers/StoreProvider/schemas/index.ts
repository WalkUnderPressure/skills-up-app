import { CounterStateSchema } from 'entities/Counter';
import { UserStateSchema } from 'entities/User';
import { SignInByUsernameSchema } from 'features/SignInByUsername';

type StoreStateSchema = {
  counter: CounterStateSchema;
  user: UserStateSchema;
  'sign-in_username'?: SignInByUsernameSchema;
};

export default StoreStateSchema;
