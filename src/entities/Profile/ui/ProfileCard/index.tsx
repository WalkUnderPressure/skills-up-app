import ProfileCardRedesigned from './ProfileCardRedesigned';
import ProfileCardDeprecated from './ProfileCardDeprecated';
import { ToggleFeatures } from '~/entities/User';
import { ProfileProps } from './types';

const ProfileCard = (props: ProfileProps) => {
  return (
    <ToggleFeatures
      feature="redesign"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};

export default ProfileCard;
