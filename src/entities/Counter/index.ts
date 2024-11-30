import CounterStateSchema from './model/types/CounterStateSchema';
import { counterReducer } from './model/slices/counterSlice';
import Counter from './ui/Counter';

export { counterReducer, Counter };
export type { CounterStateSchema };
