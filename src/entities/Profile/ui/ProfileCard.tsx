import classNames from 'shared/lib/classNames';
import * as cls from './ProfileCard.module.scss';

type ProfileProps = {
  className?: string;
};

const Profile = (props: ProfileProps) => {
  const { className } = props;

  return <div className={classNames(cls['profile-card'], {}, [className])}>PROFILE</div>;
};

export default Profile;
