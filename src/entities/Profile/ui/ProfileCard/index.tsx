import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { Text, TextTheme } from 'shared/ui/Text';
import { CountrySelect } from 'entities/Country';
import classNames from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import { Input } from 'shared/ui/Input';
import { Profile, ProfileErrorCode, ProfileKeys } from '../../model/types/ProfileStateSchema';
import * as cls from './ProfileCard.module.scss';

type ProfileProps = {
  className?: string;
  profile?: Nullable<Profile>;
  isLoading?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  errorData?: Nullable<ErrorData<ProfileErrorCode>>;
  onChange?: (fieldName: ProfileKeys, value: string) => void;
};

const ProfileCard = (props: ProfileProps) => {
  const { isLoading = false, isReadonly = true, isDisabled = false } = props;
  const { profile, className, onChange, errorData } = props;

  const {
    username,
    first_name: firstName,
    last_name: lastName,
    age,
    currency,
    country,
    city,
    avatar,
  } = profile || {};

  const { t } = useTranslation('pages.profile');

  const errorMessage = useMemo(() => {
    switch (errorData?.errorCode) {
      case ProfileErrorCode.PROFILE_NOT_FOUND:
        return t('error.not_found', { defaultValue: 'Unable to upload profile data!' });
      case ProfileErrorCode.CANT_UPDATE_PROFILE:
        return t('error.update_fail', { defaultValue: 'Failed to update profile data!' });
      default:
        return '';
    }
  }, [errorData?.errorCode, t]);

  const onChangeHandler = useCallback(
    (name: ProfileKeys) => {
      return (value: string) => {
        if (onChange) {
          onChange(name, value);
        }
      };
    },
    [onChange],
  );

  return (
    <div className={classNames(cls['profile-card'], {}, [className])}>
      {isLoading && <Loader />}

      {!isLoading && errorData?.isFailed && (
        <div className={classNames(cls['error-block'], {}, [className])}>
          <Text title={errorMessage} theme={TextTheme.ERROR} />
        </div>
      )}

      {!isLoading && !errorData?.isFailed && (
        <>
          {avatar && <Avatar src={avatar} alt="ProfileUserAvatar" size={AvatarSize.L} />}

          <div className={classNames(cls.inputs)}>
            <Input
              label={t('username', { defaultValue: 'Username' })}
              value={username}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('username')}
            />

            <Input
              label={t('age', { defaultValue: 'Age' })}
              value={String(age)}
              readOnly={isReadonly}
              disabled={isDisabled}
              type="number"
              onChange={onChangeHandler('age')}
            />

            <Input
              label={t('first_name', { defaultValue: 'First name' })}
              value={firstName}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('first_name')}
            />

            <Input
              label={t('last_name', { defaultValue: 'Last name' })}
              value={lastName}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('last_name')}
            />

            <CurrencySelect
              label={t('currency', { defaultValue: 'Currency' })}
              value={currency}
              onChange={onChangeHandler('currency')}
              disabled={isDisabled}
              readOnly={isReadonly}
            />

            <div />

            <CountrySelect
              value={String(country)}
              onChange={onChangeHandler('country')}
              label={t('country', { defaultValue: 'Country' })}
              disabled={isDisabled}
              readOnly={isReadonly}
            />

            <Input
              label={t('city', { defaultValue: 'City' })}
              value={city}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('city')}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
