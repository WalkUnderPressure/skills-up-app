import { memo } from 'react';
import { useCallback } from 'react';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import useInitialEffect from '~/shared/lib/hooks/useInitialEffect';
import { ProfileCard, ProfileKeys, ProfileValidationErrors } from '~/entities/Profile';
import classNames from '~/shared/lib/classNames';
import { VStack } from '~/shared/ui/Stack';
import {
  useProfileValidationErrors,
  useProfileIsReadonly,
  useProfileIsLoading,
  useProfileErrorData,
  useProfileIsSaving,
  useProfileFormData,
} from '../../model/selectors';
import { profileReducer, useProfileActions } from '../../model/slices/editableProfileCardSlice';
import { useFetchProfileData } from '../../model/services/fetchProfileData';
import EditableProfileCardHeader from '../EditableProfileCardHeader';
import cls from './EditableProfileCard.module.scss';

const reducers: ReducersMap = {
  profile: profileReducer,
};

type EditableProfileCardProps = {
  profileUserId: string;
} & PropsWithClassName;

const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, profileUserId } = props;

  const isLoading = useProfileIsLoading();
  const isSaving = useProfileIsSaving();
  const profile = useProfileFormData();

  const validationErrors: ProfileValidationErrors = useProfileValidationErrors() || {};
  const isReadonly = useProfileIsReadonly();
  const errorData = useProfileErrorData();

  const { updateProfileFormData } = useProfileActions();
  const fetchProfileData = useFetchProfileData();

  const onChangeInputValue = useCallback(
    (fieldName: ProfileKeys, value: string) => {
      updateProfileFormData({ [fieldName]: value });
    },
    [updateProfileFormData],
  );

  useInitialEffect(() => {
    fetchProfileData(profileUserId);
  }, [fetchProfileData, profileUserId]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <VStack gap="32" className={classNames(cls.content, {}, [className])}>
        <EditableProfileCardHeader />

        <ProfileCard
          profile={profile}
          isLoading={isLoading}
          isReadonly={isReadonly}
          errorData={errorData}
          onChange={onChangeInputValue}
          isDisabled={isSaving}
          validationErrors={validationErrors}
        />
      </VStack>
    </DynamicReducerProvider>
  );
});

export default EditableProfileCard;
