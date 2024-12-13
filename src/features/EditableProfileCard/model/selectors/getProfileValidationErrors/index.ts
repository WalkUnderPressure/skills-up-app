import { ProfileValidationErrors } from '~/entities/Profile';
import { buildAppSelector } from '~/shared/lib/store';

export const [useProfileValidationErrors, getProfileValidationErrors] = buildAppSelector(
  (state): ProfileValidationErrors | null => {
    return state['profile']?.validationErrors || null;
  },
);
