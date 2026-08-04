import { DEFAULT_FEATURE_FLAGS } from '../../../constants';
import { buildAppSelector } from '~/shared/lib/store';

export const [useFeatureFlags, getFeatureFlags] = buildAppSelector(
  (state) => state.user?.authData?.features || DEFAULT_FEATURE_FLAGS,
);
