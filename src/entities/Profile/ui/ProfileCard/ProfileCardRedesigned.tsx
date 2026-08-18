import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar } from '~/shared/ui/redesigned/Avatar';
import { CurrencySelect } from '~/entities/Currency';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import { Text } from '~/shared/ui/redesigned/Text';
import { CountrySelect } from '~/entities/Country';
import classNames from '~/shared/lib/classNames';
import { Input } from '~/shared/ui/redesigned/Input';
import { ProfileKeys } from '../../model/types/ProfileStateSchema';
import ProfileErrorCode from '../../model/consts/ProfileErrorCode';
import { ProfileCardDataTestIds } from './ProfileCard.test-ids';
import cls from './ProfileCard.module.scss';
import { ProfileProps, ErrorTranslates } from './types';
import { getFieldError } from './helpers';
import { Card } from '~/shared/ui/redesigned/Card';
import { Skeleton } from '~/shared/ui/redesigned/Skeleton';

const INPUTS_COUNT = 7;

type ProfileCardSkeletonsProps = {
  withAvatar: boolean;
};

const ProfileCardSkeletons = (props: ProfileCardSkeletonsProps) => {
  const { withAvatar } = props;

  return (
    <>
      {withAvatar && (
        <HStack fullW align="center" justify="center">
          <Skeleton variant="circle" width={240} height={240} />
        </HStack>
      )}

      <div className={classNames(cls.inputs, {}, [cls['inputs-full']])}>
        {Array(INPUTS_COUNT)
          .fill(null)
          .map((_input, index) => (
            <div key={index} style={{ height: '84px', display: 'flex' }}>
              <Skeleton height={52} width="100%" variant="rect" />
            </div>
          ))}
      </div>
    </>
  );
};

const ProfileCardRedesigned = (props: ProfileProps) => {
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
    <Card fullW={true} padding="p-32">
      <VStack align="start" justify="start" gap="24" fullH fullW className={className}>
        {isLoading && <ProfileCardSkeletons withAvatar={Boolean(avatar)} />}

        {!isLoading && errorData?.isFailed && (
          <HStack justify="center" align="center" fullW fullH>
            <Text title={errorMessage} variant="error" />
          </HStack>
        )}

        {!isLoading && !errorData?.isFailed && (
          <>
            {avatar && (
              <HStack fullW align="center" justify="center">
                <Avatar
                  src={avatar}
                  alt="ProfileUserAvatar"
                  size="l"
                  className={classNames(cls.avatar)}
                  isInverted={true}
                />
              </HStack>
            )}

            <div className={classNames(cls.inputs, {}, [cls['inputs-full']])}>
              <Input
                label={t('username', { defaultValue: 'Username' })}
                value={username}
                readOnly={isReadonly}
                disabled={isDisabled}
                onChange={onChangeHandler('username')}
                errorMessage={getFieldError(validationErrors, 'username', errorsTranslates)}
                data-testid={ProfileCardDataTestIds.username}
              />

              <Input
                label={t('age', { defaultValue: 'Age' })}
                value={String(age)}
                readOnly={isReadonly}
                disabled={isDisabled}
                type="number"
                onChange={onChangeHandler('age')}
                data-testid={ProfileCardDataTestIds.age}
              />

              <Input
                label={t('firstName', { defaultValue: 'First name' })}
                value={firstName}
                readOnly={isReadonly}
                disabled={isDisabled}
                onChange={onChangeHandler('firstName')}
                errorMessage={getFieldError(validationErrors, 'firstName', errorsTranslates)}
                data-testid={ProfileCardDataTestIds.firstName}
              />

              <Input
                label={t('lastName', { defaultValue: 'Last name' })}
                value={lastName}
                readOnly={isReadonly}
                disabled={isDisabled}
                onChange={onChangeHandler('lastName')}
                errorMessage={getFieldError(validationErrors, 'lastName', errorsTranslates)}
                data-testid={ProfileCardDataTestIds.lastName}
              />

              <CountrySelect
                value={country}
                onChange={onChangeHandler('country')}
                label={t('country', { defaultValue: 'Country' })}
                disabled={isDisabled}
                readOnly={isReadonly}
                data-testid={ProfileCardDataTestIds.country}
              />

              <Input
                label={t('city', { defaultValue: 'City' })}
                value={city}
                readOnly={isReadonly}
                disabled={isDisabled}
                onChange={onChangeHandler('city')}
                errorMessage={getFieldError(validationErrors, 'city', errorsTranslates)}
                data-testid={ProfileCardDataTestIds.city}
              />

              <CurrencySelect
                label={t('currency', { defaultValue: 'Currency' })}
                value={currency}
                onChange={onChangeHandler('currency')}
                disabled={isDisabled}
                readOnly={isReadonly}
                direction="top-left"
                data-testid={ProfileCardDataTestIds.currency}
              />
            </div>
          </>
        )}
      </VStack>
    </Card>
  );
};

export default ProfileCardRedesigned;
