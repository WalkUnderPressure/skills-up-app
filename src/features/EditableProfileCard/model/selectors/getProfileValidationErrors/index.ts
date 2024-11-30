import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ProfileValidationErrors } from 'entities/Profile';

const getProfileValidationErrors = (state: StoreStateSchema): ProfileValidationErrors | null => {
  return state['profile']?.validationErrors || null;
};

export default getProfileValidationErrors;
