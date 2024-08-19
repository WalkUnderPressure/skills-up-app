import { useTranslation } from 'react-i18next';

import { Button, ButtonRounded, ButtonTheme } from 'shared/ui/Button';
import { ProfileErrorCode } from 'entities/Profile';
import classNames from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import * as cls from './ProfilePageHeader.module.scss';

import EditIcon from 'shared/assets/icons/edit.svg';
import ResetIcon from 'shared/assets/icons/reset.svg';
import SaveIcon from 'shared/assets/icons/save.svg';

type ProfilePageHeaderProps = {
  className?: string;
  isReadonly?: boolean;
  onEdit: () => void;
  onReset: () => void;
  onSave: () => void;
  errorData?: ErrorData<ProfileErrorCode>;
  isValid?: boolean;
};

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { isReadonly = true, errorData, isValid } = props;
  const { className, onEdit, onReset, onSave } = props;

  const { t } = useTranslation('pages.profile');

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <Text title={t('profile', { defaultValue: 'User profile' })} />

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
            <div className={classNames(cls['save-block'])}>
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
                disabled={isValid}
              >
                {t('form.save', { defaultValue: 'Save' })}
                <SaveIcon className={classNames(cls['btn-icon'])} />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
