import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import ProfilePageHeader from '../ProfilePageHeader';
import classNames from 'shared/lib/classNames';
import {
  getProfileValidationErrors,
  getProfileFormData,
  fetchProfileData,
  updateProfileData,
  getProfileIsLoading,
  getProfileIsReadonly,
  profileActions,
  ProfileCard,
  ProfileKeys,
  profileReducer,
  getProfileIsSaving,
  getProfileErrorData,
  isValidForm,
  ProfileValidationErrors,
} from 'entities/Profile';
import { getUserId } from 'entities/User';
import { Page } from 'shared/ui/Page';

import * as cls from './ProfilePage.module.scss';

const reducers: ReducersMap = {
  profile: profileReducer,
};

export type ProfilePageProps = {
  className?: string;
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { id: userId } = useParams();
  const authUserId = useAppSelector(getUserId);

  useEffect(() => {
    const profileUserId = userId || authUserId || '';

    dispatch(fetchProfileData(profileUserId));
  }, [authUserId, dispatch, userId]);

  const validationErrors: ProfileValidationErrors =
    useAppSelector(getProfileValidationErrors) || {};
  const errorData = useAppSelector(getProfileErrorData);
  const isReadonly = useAppSelector(getProfileIsReadonly);
  const isLoading = useAppSelector(getProfileIsLoading);
  const isSaving = useAppSelector(getProfileIsSaving);
  const profile = useAppSelector(getProfileFormData);

  const isValid = isValidForm(validationErrors);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setIsReadonly(false));
  }, [dispatch]);

  const onReset = useCallback(() => {
    dispatch(profileActions.resetFormData());
  }, [dispatch]);

  const onChangeInputValue = useCallback(
    (fieldName: ProfileKeys, value: string) => {
      dispatch(profileActions.updateProfileFormData({ [fieldName]: value }));
    },
    [dispatch],
  );

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <DynamicReducerProvider reducers={reducers}>
      <Page>
        <div className={classNames(cls.content, {}, [className])}>
          <ProfilePageHeader
            isReadonly={isReadonly}
            onEdit={onEdit}
            onReset={onReset}
            onSave={onSave}
            errorData={errorData}
            isValid={!isValid}
          />

          <ProfileCard
            profile={profile}
            isLoading={isLoading}
            isReadonly={isReadonly}
            errorData={errorData}
            onChange={onChangeInputValue}
            isDisabled={isSaving}
            validationErrors={validationErrors}
          />
        </div>
      </Page>
    </DynamicReducerProvider>
  );
};

export default ProfilePage;
