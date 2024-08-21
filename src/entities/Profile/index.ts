import {
  Profile,
  ProfileKeys,
  ProfileErrorCode,
  ProfileStateSchema,
} from './model/types/ProfileStateSchema';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData';
import ProfileCard from './ui/ProfileCard';

import type { ValidationErrors as ProfileValidationErrors } from './model/types/ProfileStateSchema';

import getProfileValidationErrors from './model/selectors/getProfileValidationErrors';
import getProfileIsReadonly from './model/selectors/getProfileIsReadonly';
import getProfileIsLoading from './model/selectors/getProfileIsLoading';
import getProfileErrorData from './model/selectors/getProfileErrorData';
import getProfileFormData from './model/selectors/getProfileFormData';
import getProfileIsSaving from './model/selectors/getProfileIsSaving';
import getProfileData from './model/selectors/getProfileData';
import { isValidForm } from './model/services/validateProfileData';

export {
  isValidForm,
  ProfileCard,
  profileActions,
  profileReducer,
  Profile,
  ProfileKeys,
  ProfileStateSchema,
  ProfileErrorCode,
  fetchProfileData,
  updateProfileData,
  getProfileData,
  getProfileIsLoading,
  getProfileIsReadonly,
  getProfileValidationErrors,
  getProfileFormData,
  getProfileErrorData,
  getProfileIsSaving,
  ProfileValidationErrors,
};
