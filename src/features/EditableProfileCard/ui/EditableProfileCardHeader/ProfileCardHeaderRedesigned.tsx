import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '~/shared/ui/redesigned/Button';
import { ProfileValidationErrors } from '~/entities/Profile';
import classNames from '~/shared/lib/classNames';
import { HStack } from '~/shared/ui/redesigned/Stack';
import { Text } from '~/shared/ui/redesigned/Text';
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
import { Card } from '~/shared/ui/redesigned/Card';

type ProfileCardHeaderRedesignedProps = PropsWithClassName;

const ProfileCardHeaderRedesigned = (_props: ProfileCardHeaderRedesignedProps) => {
  const { t } = useTranslation(['common', 'pages.profile']);
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
    <Card fullW={true}>
      <HStack fullW justify="between" align="center" gap="24">
        <Text title={t('profile', { defaultValue: 'User profile', ns: 'pages.profile' })} />

        {isCanEdit && (
          <>
            {!errorData?.isFailed && (
              <>
                {isReadonly ? (
                  <Button
                    variant="fill"
                    onClick={onEdit}
                    data-testid={EditableProfileDataTestIds.editBtnDataTestId}
                  >
                    {t('form.edit', { defaultValue: 'Edit', ns: 'common' })}
                    <EditIcon className={classNames(cls['btn-icon-redesigned'])} />
                  </Button>
                ) : (
                  <HStack gap="16">
                    <Button
                      variant="fill"
                      onClick={onReset}
                      data-testid={EditableProfileDataTestIds.resetBtnDataTestId}
                    >
                      {t('form.reset', { defaultValue: 'Reset', ns: 'common' })}

                      <ResetIcon width="100px" className={classNames(cls['btn-icon-redesigned'])} />
                    </Button>

                    <Button
                      variant="fill"
                      onClick={onSave}
                      disabled={!isValid}
                      data-testid={EditableProfileDataTestIds.saveBtnDataTestId}
                    >
                      {t('form.save', { defaultValue: 'Save', ns: 'common' })}

                      <SaveIcon className={classNames(cls['btn-icon-redesigned'])} />
                    </Button>
                  </HStack>
                )}
              </>
            )}
          </>
        )}
      </HStack>
    </Card>
  );
};

export default ProfileCardHeaderRedesigned;
