import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers/StoreProvider';
import classNames from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import ProfileCardItem from '../ProfileCardItem';
import * as cls from './ProfileCard.module.scss';

// TODO: Replace with one selector
import getProfileFirstName from '../../model/selectors/getProfileFirstName';
import getProfileLastName from '../../model/selectors/getProfileLastName';
import getProfileUsername from '../../model/selectors/getProfileUsername';
import getProfileCurrency from '../../model/selectors/getProfileCurrency';
import getProfileCountry from '../../model/selectors/getProfileCountry';
import getProfileAvatar from '../../model/selectors/getProfileAvatar';
import getProfileCity from '../../model/selectors/getProfileCity';
import getProfileAge from '../../model/selectors/getProfileAge';

// TODO: Don't delete
// import { Button, ButtonRounded, ButtonTheme } from 'shared/ui/Button';
// import EditIcon from 'shared/assets/icons/edit.svg';

type ProfileProps = {
  className?: string;
};

const Profile = (props: ProfileProps) => {
  const { className } = props;

  // TODO: Change to use one selector which get all profile data
  const username = useAppSelector(getProfileUsername);
  const firstName = useAppSelector(getProfileFirstName);
  const lastName = useAppSelector(getProfileLastName);
  const age = useAppSelector(getProfileAge);
  const currency = useAppSelector(getProfileCurrency);
  const country = useAppSelector(getProfileCountry);
  const city = useAppSelector(getProfileCity);
  const avatar = useAppSelector(getProfileAvatar);

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

      {avatar && <img className={classNames(cls.avatar)} src={avatar} alt="UserAvatar" />}

      {UserDataList.map((item) => (
        <ProfileCardItem key={item.title} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default Profile;
