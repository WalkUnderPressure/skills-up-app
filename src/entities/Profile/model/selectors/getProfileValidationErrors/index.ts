import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ValidationErrors } from '../../types/ProfileStateSchema';

const getProfileValidationErrors = (state: StoreStateSchema): ValidationErrors | null => {
  return state['profile']?.validationErrors || null;
};

export default getProfileValidationErrors;
