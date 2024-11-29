import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileErrorCode, ProfileValidationErrors } from 'features/EditableProfileCard';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text';
import { CountrySelect } from 'entities/Country';
import classNames from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import { Input } from 'shared/ui/Input';
import { Profile, ProfileKeys } from '../../model/types/ProfileStateSchema';
import * as cls from './ProfileCard.module.scss';

type ProfileProps = {
  className?: string;
  profile?: Nullable<Profile>;
  validationErrors?: ProfileValidationErrors;
  isLoading?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  errorData?: Nullable<ErrorData<ProfileErrorCode>>;
  onChange?: (fieldName: ProfileKeys, value: string) => void;
};

type ErrorTranslates = Record<ProfileErrorCode, string>;

const getFieldError = (
  validationErrors: ProfileValidationErrors = {},
  fieldName: ProfileKeys,
  errorsTranslates: ErrorTranslates,
) => {
  const index = validationErrors?.[fieldName]?.at(0);
  let message = '';

  if (index) {
    message = errorsTranslates[index];
  }

  return message;
};

const ProfileCard = (props: ProfileProps) => {
  const { profile, className, onChange, errorData, validationErrors } = props;
  const { isLoading = false, isReadonly = true, isDisabled = false } = props;

  const { username, firstName, lastName, age, currency, country, city, avatar } = profile || {};

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

  const errorsTranslates = useMemo(
    () =>
      ({
        REQUIRED: t('form.errors.required', {
          defaultValue: 'This field is required!',
          ns: 'common',
        }),
      }) as ErrorTranslates,
    [t],
  );

  return (
    <VStack align="start" justify="start" gap="24" fullH fullW className={className}>
      {isLoading && <Loader />}

      {!isLoading && errorData?.isFailed && (
        <HStack justify="center" align="center" fullW fullH>
          <Text title={errorMessage} theme={TextTheme.ERROR} />
        </HStack>
      )}

      {!isLoading && !errorData?.isFailed && (
        <>
          {avatar && (
            <Avatar
              src={avatar}
              alt="ProfileUserAvatar"
              size={AvatarSize.L}
              className={classNames(cls.avatar)}
            />
          )}

          <div
            className={classNames(cls.inputs, {
              [cls['inputs-full']]: Boolean(__PROJECT__ === 'storybook'),
            })}
          >
            <Input
              label={t('username', { defaultValue: 'Username' })}
              value={username}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('username')}
              errorMessage={getFieldError(validationErrors, 'username', errorsTranslates)}
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
              label={t('firstName', { defaultValue: 'First name' })}
              value={firstName}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('firstName')}
              errorMessage={getFieldError(validationErrors, 'firstName', errorsTranslates)}
            />

            <Input
              label={t('lastName', { defaultValue: 'Last name' })}
              value={lastName}
              readOnly={isReadonly}
              disabled={isDisabled}
              onChange={onChangeHandler('lastName')}
              errorMessage={getFieldError(validationErrors, 'lastName', errorsTranslates)}
            />

            <CountrySelect
              value={country}
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
              errorMessage={getFieldError(validationErrors, 'city', errorsTranslates)}
            />

            <CurrencySelect
              label={t('currency', { defaultValue: 'Currency' })}
              value={currency}
              onChange={onChangeHandler('currency')}
              disabled={isDisabled}
              readOnly={isReadonly}
            />
          </div>
        </>
      )}
    </VStack>
  );
};

export default ProfileCard;
