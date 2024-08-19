import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ValidationErrors } from '../../types/ProfileStateSchema';

const getProfileValidationErrors = (state: StoreStateSchema): ValidationErrors => {
  return state['profile']?.validationErrors || {};
};

export default getProfileValidationErrors;
