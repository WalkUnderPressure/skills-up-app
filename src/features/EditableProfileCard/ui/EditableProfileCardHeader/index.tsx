import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { ProfileValidationErrors } from 'features/EditableProfileCard';
import { Button, ButtonRounded, ButtonTheme } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import getProfileValidationErrors from '../../model/selectors/getProfileValidationErrors';
import getProfileIsReadonly from '../../model/selectors/getProfileIsReadonly';
import { profileActions } from '../../model/slices/editableProfileCardSlice';
import getProfileErrorData from '../../model/selectors/getProfileErrorData';
import { updateProfileData } from '../../model/services/updateProfileData';
import { isValidForm } from '../../model/services/validateProfileData';
import useIsCanEdit from './useIsCanEdit';

import * as cls from './EditableProfileCardHeader.module.scss';

import EditIcon from 'shared/assets/icons/edit.svg';
import ResetIcon from 'shared/assets/icons/reset.svg';
import SaveIcon from 'shared/assets/icons/save.svg';

type EditableProfileCardHeaderProps = {
  className?: string;
};

const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation('pages.profile');
  const isCanEdit = useIsCanEdit();

  const validationErrors: ProfileValidationErrors =
    useAppSelector(getProfileValidationErrors) || {};
  const errorData = useAppSelector(getProfileErrorData);
  const isReadonly = useAppSelector(getProfileIsReadonly);

  const isValid = isValidForm(validationErrors);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setIsReadonly(false));
  }, [dispatch]);

  const onReset = useCallback(() => {
    dispatch(profileActions.resetFormData());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack className={classNames(className)} fullW justify="between" align="center" gap="24">
      <Text title={t('profile', { defaultValue: 'User profile' })} />

      {isCanEdit && (
        <>
          {!errorData?.isFailed && (
            <>
              {isReadonly ? (
                <Button
                  className={classNames(cls['header-btn'])}
                  isSquare={true}
                  rounded={ButtonRounded.S}
                  theme={ButtonTheme.BG_INVERTED}
                  onClick={onEdit}
                >
                  {t('form.edit', { defaultValue: 'Edit' })}
                  <EditIcon className={classNames(cls['btn-icon'])} />
                </Button>
              ) : (
                <HStack gap="16">
                  <Button
                    className={classNames(cls['header-btn'])}
                    isSquare={true}
                    rounded={ButtonRounded.S}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onReset}
                  >
                    {t('form.reset', { defaultValue: 'Reset' })}

                    <ResetIcon
                      width="100px"
                      className={classNames(cls['btn-icon'], {}, [cls['btn-icon-inverted']])}
                    />
                  </Button>

                  <Button
                    className={classNames(cls['header-btn'])}
                    isSquare={true}
                    rounded={ButtonRounded.S}
                    theme={ButtonTheme.BG_INVERTED}
                    onClick={onSave}
                    disabled={!isValid}
                  >
                    {t('form.save', { defaultValue: 'Save' })}

                    <SaveIcon className={classNames(cls['btn-icon'])} />
                  </Button>
                </HStack>
              )}
            </>
          )}
        </>
      )}
    </HStack>
  );
};

export default EditableProfileCardHeader;
