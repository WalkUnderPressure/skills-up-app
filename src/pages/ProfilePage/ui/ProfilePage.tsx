import { useEffect } from 'react';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'app/providers/StoreProvider';
import classNames from 'shared/lib/classNames';

const reducers: ReducersMap = {
  profile: profileReducer,
};

export type ProfilePageProps = {
  className?: string;
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicReducerProvider>
  );
};

export default ProfilePage;
