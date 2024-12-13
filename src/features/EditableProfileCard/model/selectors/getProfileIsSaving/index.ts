import { buildAppSelector } from '~/shared/lib/store';

export const [useProfileIsSaving, getProfileIsSaving] = buildAppSelector((state) => {
  return state['profile']?.isSaving || false;
});
