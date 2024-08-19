import {
  Profile,
  ProfileErrorCode,
  ProfileKeys,
  ValidationErrors,
} from '../../types/ProfileStateSchema';

function validateProfileData(formData: Partial<Profile>): ValidationErrors {
  const errors: ValidationErrors = {};

  Object.entries(formData).forEach(([fieldName, fieldValue]) => {
    const propertyKey = fieldName as ProfileKeys;

    if (String(fieldValue).length === 0) {
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

export function isValidForm(validationErrors: ValidationErrors) {
  return Boolean(!Object.keys(validationErrors).length);
}

export default validateProfileData;
