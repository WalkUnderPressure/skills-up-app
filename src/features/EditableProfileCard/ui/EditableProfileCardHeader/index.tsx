import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonTheme } from '~/shared/ui/Button';
import { ProfileValidationErrors } from '~/entities/Profile';
import classNames from '~/shared/lib/classNames';
import { HStack } from '~/shared/ui/Stack';
import { Text } from '~/shared/ui/Text';
import { useProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors';
import { useProfileIsReadonly } from '../../model/selectors/getProfileIsReadonly';
import { useProfileErrorData } from '../../model/selectors/getProfileErrorData';
import { EditableProfileDataTestIds } from '../EditableProfileCard.test-ids';
import { useProfileActions } from '../../model/slices/editableProfileCardSlice';
import { useUpdateProfileData } from '../../model/services/updateProfileData';
import { isValidForm } from '../../model/services/validateProfileData';
import useIsCanEdit from './useIsCanEdit';

import cls from './EditableProfileCardHeader.module.scss';

import EditIcon from '~/shared/assets/icons/edit.svg';
import ResetIcon from '~/shared/assets/icons/reset.svg';
import SaveIcon from '~/shared/assets/icons/save.svg';

type EditableProfileCardHeaderProps = PropsWithClassName;

const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('pages.profile');
  const isCanEdit = useIsCanEdit();

  const validationErrors: ProfileValidationErrors = useProfileValidationErrors() || {};
  const errorData = useProfileErrorData();
  const isReadonly = useProfileIsReadonly();

  const isValid = isValidForm(validationErrors);

  const { setIsReadonly, resetFormData } = useProfileActions();
  const updateProfileData = useUpdateProfileData();

  const onEdit = useCallback(() => {
    setIsReadonly(false);
  }, [setIsReadonly]);

  const onReset = useCallback(() => {
    resetFormData();
  }, [resetFormData]);

  const onSave = useCallback(() => {
    updateProfileData();
  }, [updateProfileData]);

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
                  data-testid={EditableProfileDataTestIds.editBtnDataTestId}
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
                    data-testid={EditableProfileDataTestIds.resetBtnDataTestId}
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
                    data-testid={EditableProfileDataTestIds.saveBtnDataTestId}
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
