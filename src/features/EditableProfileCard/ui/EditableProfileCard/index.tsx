import { memo } from 'react';
import { useCallback } from 'react';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from '~/app/providers/StoreProvider';
import useInitialEffect from '~/shared/lib/hooks/useInitialEffect';
import { ProfileCard, ProfileKeys, ProfileValidationErrors } from '~/entities/Profile';
import classNames from '~/shared/lib/classNames';
import { VStack } from '~/shared/ui/Stack';
import getProfileValidationErrors from '../../model/selectors/getProfileValidationErrors';
import getProfileIsReadonly from '../../model/selectors/getProfileIsReadonly';
import { profileActions, profileReducer } from '../../model/slices/editableProfileCardSlice';
import getProfileIsLoading from '../../model/selectors/getProfileIsLoading';
import getProfileErrorData from '../../model/selectors/getProfileErrorData';
import getProfileIsSaving from '../../model/selectors/getProfileIsSaving';
import getProfileFormData from '../../model/selectors/getProfileFormData';
import { fetchProfileData } from '../../model/services/fetchProfileData';
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

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getProfileIsLoading);
  const isSaving = useAppSelector(getProfileIsSaving);
  const profile = useAppSelector(getProfileFormData);

  const validationErrors: ProfileValidationErrors =
    useAppSelector(getProfileValidationErrors) || {};
  const isReadonly = useAppSelector(getProfileIsReadonly);
  const errorData = useAppSelector(getProfileErrorData);

  const onChangeInputValue = useCallback(
    (fieldName: ProfileKeys, value: string) => {
      dispatch(profileActions.updateProfileFormData({ [fieldName]: value }));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchProfileData(profileUserId));
  }, [dispatch, profileUserId]);

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
