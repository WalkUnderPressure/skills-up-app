import { Profile, ProfileKeys } from 'entities/Profile';
import { ValidationErrors, ProfileErrorCode } from '../../types/EditableProfileCardStateSchema';

function validateProfileData(formData: Partial<Profile>): ValidationErrors {
  const errors: ValidationErrors = {};

  Object.entries(formData)
    .filter(([fieldName]) => {
      const propertyKey = fieldName as ProfileKeys;
      return propertyKey !== 'avatar';
    })
    .forEach(([fieldName, fieldValue]) => {
      const propertyKey = fieldName as ProfileKeys;

      if (String(fieldValue || '').length === 0) {
        const validationError = ProfileErrorCode.REQUIRED;

        if (Array.isArray(errors[propertyKey])) {
          errors[propertyKey].push(validationError);
        } else {
          errors[propertyKey] = [validationError];
        }
      }
    });

  return errors;
}

function isValidForm(validationErrors: ValidationErrors) {
  return Boolean(!Object.keys(validationErrors).length);
}

export { validateProfileData, isValidForm };
