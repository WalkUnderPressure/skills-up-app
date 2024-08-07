import { CounterStateSchema } from 'entities/Counter';
import { UserStateSchema } from 'entities/User';

type StoreStateSchema = {
  counter: CounterStateSchema;
  user: UserStateSchema;
};

export default StoreStateSchema;
