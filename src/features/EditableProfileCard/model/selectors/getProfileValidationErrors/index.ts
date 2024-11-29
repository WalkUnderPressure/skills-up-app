import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ValidationErrors } from '../../types/EditableProfileCardStateSchema';

const getProfileValidationErrors = (state: StoreStateSchema): ValidationErrors | null => {
  return state['profile']?.validationErrors || null;
};

export default getProfileValidationErrors;
