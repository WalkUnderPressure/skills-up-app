import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { ProfileCard, profileReducer } from 'entities/Profile';
import classNames from 'shared/lib/classNames';

const reducers: ReducersMap = {
  profile: profileReducer,
};

export type ProfilePageProps = {
  className?: string;
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicReducerProvider>
  );
};

export default ProfilePage;
