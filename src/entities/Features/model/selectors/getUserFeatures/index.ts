import { DEFAULT_FEATURES } from '../../../constants';
import { buildAppSelector } from '~/shared/lib/store';

export const [useUserFeatures, getUserFeatures] = buildAppSelector(
  (state) => state.user?.authData?.features || DEFAULT_FEATURES,
);
