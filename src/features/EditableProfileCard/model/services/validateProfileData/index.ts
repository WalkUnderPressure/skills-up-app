import {
  Profile,
  ProfileErrorCode,
  ProfileKeys,
  ProfileValidationErrors,
} from '~/entities/Profile';

function validateProfileData(formData: Partial<Profile>): ProfileValidationErrors {
  const errors: ProfileValidationErrors = {};

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

function isValidForm(validationErrors: ProfileValidationErrors) {
  return Boolean(!Object.keys(validationErrors).length);
}

export { validateProfileData, isValidForm };
