import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers/StoreProvider';
import classNames from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import { Text } from 'shared/ui/Text';
import getProfileIsLoading from '../../model/selectors/getProfileIsLoading';
import getProfileData from '../../model/selectors/getProfileData';
import ProfileCardItem from '../ProfileCardItem';
import * as cls from './ProfileCard.module.scss';

// TODO: Don't delete
// import getProfileIsReadonly from '../../model/selectors/getProfileIsReadonly';
// import getProfileErrorData from '../../model/selectors/getProfileErrorData';
// import { Button, ButtonRounded, ButtonTheme } from 'shared/ui/Button';
// import EditIcon from 'shared/assets/icons/edit.svg';

type ProfileProps = {
  className?: string;
};

const Profile = (props: ProfileProps) => {
  const { className } = props;

  const {
    username,
    first_name: firstName,
    last_name: lastName,
    age,
    currency,
    country,
    city,
    avatar,
  } = useAppSelector(getProfileData);
  const isLoading = useAppSelector(getProfileIsLoading);

  // TODO: Don't delete
  // const isReadonly = useAppSelector(getProfileIsReadonly);
  // const errorData = useAppSelector(getProfileErrorData);

  const { t } = useTranslation('pages.profile');

  const UserDataList = useMemo(() => {
    const list = [
      {
        title: t('username', { defaultValue: 'Username' }),
        value: username,
      },
      {
        title: t('first_name', { defaultValue: 'First name' }),
        value: firstName,
      },
      {
        title: t('last_name', { defaultValue: 'Last name' }),
        value: lastName,
      },
      {
        title: t('age', { defaultValue: 'Age' }),
        value: String(age),
      },
      {
        title: t('currency', { defaultValue: 'Currency' }),
        value: currency,
      },
      {
        title: t('country', { defaultValue: 'Country' }),
        value: country,
      },
      {
        title: t('city', { defaultValue: 'City' }),
        value: city,
      },
    ];

    return list;
  }, [age, city, country, currency, firstName, lastName, t, username]);

  return (
    <div className={classNames(cls['profile-card'], {}, [className])}>
      <div className={classNames(cls.header)}>
        <Text title={t('profile', { defaultValue: 'User profile' })} />

        {/* TODO: Add when start add edit functionality */}
        {/* <Button
          className={classNames(cls['edit-btn'])}
          isSquare={true}
          rounded={ButtonRounded.S}
          theme={ButtonTheme.BG_INVERTED}
        >
          <EditIcon className={classNames(cls.edit)} />
        </Button> */}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {avatar && <img className={classNames(cls.avatar)} src={avatar} alt="UserAvatar" />}

          {UserDataList.map((item) => (
            <ProfileCardItem key={item.title} title={item.title} value={item.value} />
          ))}
        </>
      )}
    </div>
  );
};

export default Profile;
