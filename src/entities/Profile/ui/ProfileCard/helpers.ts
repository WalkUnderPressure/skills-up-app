import { ProfileKeys, ProfileValidationErrors } from '../../model/types/ProfileStateSchema';
import { ErrorTranslates } from './types';

const getFieldError = (
  validationErrors: ProfileValidationErrors = {},
  fieldName: ProfileKeys,
  errorsTranslates: ErrorTranslates,
) => {
  const index = validationErrors?.[fieldName]?.at(0);
  let message = '';

  if (index) {
    message = errorsTranslates[index];
  }

  return message;
};

export { getFieldError };
