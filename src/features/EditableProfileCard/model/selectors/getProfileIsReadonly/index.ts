import { buildAppSelector } from '~/shared/lib/store';

export const [useProfileIsReadonly, getProfileIsReadonly] = buildAppSelector((state) => {
  return state['profile']?.isReadonly || false;
});
